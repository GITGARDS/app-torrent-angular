import { Component, Input, OnInit } from "@angular/core";
import { Filme } from "src/app/shared";

@Component({
  selector: "app-filmes-read-categoria-card2",
  templateUrl: "./filmes-read-categoria-card2.component.html",
  styleUrls: ["./filmes-read-categoria-card2.component.css"],
})
export class FilmesReadCategoriaCard2Component implements OnInit {
  @Input() filme: Filme = new Filme();

  constructor() {}

  ngOnInit(): void {}
}
