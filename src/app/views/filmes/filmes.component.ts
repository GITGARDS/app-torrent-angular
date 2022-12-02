import { Component, OnInit } from "@angular/core";
import { EventEmitterService } from "src/app/shared";

@Component({
  selector: "app-filmes",
  templateUrl: "./filmes.component.html",
  styleUrls: ["./filmes.component.css"],
})
export class FilmesComponent implements OnInit {
  mudar_tela = false;

  constructor() {}
  ev() {
    EventEmitterService.get("ev_mudar_tela").subscribe(
      (ret) => (this.mudar_tela = ret)
    );
  }

  ngOnInit(): void {
    this.ev();
  }
}
