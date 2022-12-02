import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { EventEmitterService, Filme } from "src/app/shared";

@Component({
  selector: "app-filmes-search-card",
  templateUrl: "./filmes-search-card.component.html",
  styleUrls: ["./filmes-search-card.component.css"],
})
export class FilmesSearchCardComponent implements OnInit {

  @Input() filme: Filme = new Filme();

  @Output() clicou = new EventEmitter<boolean>();

  constructor(private router: Router) {}


  ngOnInit(): void {}

  onClick(item: any) {
    this.clicou.emit(true);
    EventEmitterService.get("ev_filme_id").emit(item);
    EventEmitterService.get("ev_mudar_tela").emit(true);
    this.router.navigate(["filmes", "info", item]);
  }
}
