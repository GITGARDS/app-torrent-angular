import { Component, OnInit, Input } from "@angular/core";
import { Filme_Links } from "src/app/shared";

@Component({
  selector: "app-filmes-form-links",
  templateUrl: "./filmes-form-links.component.html",
  styleUrls: ["./filmes-form-links.component.css"],
})
export class FilmesFormLinksComponent implements OnInit {
  @Input() links: Filme_Links[] = [];

  link: Filme_Links = new Filme_Links();

  focus_etiqueta = false;
  focus_link = false;

  etiquetaMudou = false;
  linkMudou = false;

  oninputetiqueta() {
    if (this.link.etiqueta!.length > 0) {
      this.etiquetaMudou = true;
    } else {
      this.etiquetaMudou = false;
    }
  }
  oninputlink() {
    if (this.link.link!.length > 0) {
      this.linkMudou = true;
    } else {
      this.linkMudou = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onAdicionar() {
    if (this.link.etiqueta && this.link.link) {
      this.links.push(this.link);
      this.onReset();
    }
  }

  onCancelar() {
    this.onReset();
  }

  onExcluir(i: any) {
    this.links?.splice(i, 1);
  }

  onReset() {
    this.link = new Filme_Links();
    this.focus_etiqueta = false;
    this.focus_link = false;
    this.etiquetaMudou = false;
    this.linkMudou = false;
  }
}
