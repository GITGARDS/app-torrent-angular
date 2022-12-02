import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { EventEmitterService, Filme } from "src/app/shared";

@Component({
  selector: "app-filmes-read-categoria-card",
  templateUrl: "./filmes-read-categoria-card.component.html",
  styleUrls: ["./filmes-read-categoria-card.component.css"],
})
export class FilmesReadCategoriaCardComponent implements OnInit {
  @Input() filme: Filme = new Filme();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(item: any) {
    EventEmitterService.get("ev_filme_id").emit(item);
    EventEmitterService.get("ev_mudar_tela").emit(true);
    this.router.navigate(["filmes", "info", item]);
  }
}
