import { FilmeService } from "src/app/shared";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Filme } from "src/app/shared";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: "app-filmes-search",
  templateUrl: "./filmes-search.component.html",
  styleUrls: ["./filmes-search.component.css"],
})
export class FilmesSearchComponent implements OnInit {
  queryField = new FormControl();
  results$!: Observable<Filme[]>;

  mudou = false;

  focus_nome = false;

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges.pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value) => this.filmeService.findbytitulo(value))
    );
  }

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== "") {
      let params = new HttpParams();
      params = params.set("filter", value);
      this.results$ = this.filmeService.findbytitulo(value);
    }
  }

  onInput() {
    if (this.queryField.value.length > 0) {
      this.mudou = true;
    } else {
      this.mudou = false;
    }
  }

  card_search_ret() {
    this.mudou = false;
  }
}
