import { Component, OnInit, Input } from "@angular/core";
import { Filme_Atores } from "src/app/shared";

@Component({
  selector: "app-filmes-form-atores",
  templateUrl: "./filmes-form-atores.component.html",
  styleUrls: ["./filmes-form-atores.component.css"],
})
export class FilmesFormAtoresComponent implements OnInit {
  @Input() atores: Filme_Atores[] = [];

  ator: Filme_Atores = new Filme_Atores();

  focus_nome = false;
  focus_personagem = false;

  nomeMudou = false;
  personagemMudou = false;


  oninputnome() {
    if (this.ator.nome!.length > 0) {
      this.nomeMudou = true;
    } else {
      this.nomeMudou = false;
    }
  }
  oninputpersonagem() {
    if (this.ator.personagem!.length > 0) {
      this.personagemMudou = true;
    } else {
      this.personagemMudou = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onAdicionar() {
    if (this.ator.nome && this.ator.personagem) {
      this.atores.push(this.ator);
      this.onReset();
    }
  }

  onCancelar() {
    this.onReset();
  }

  onExcluir(i: any) {
    this.atores?.splice(i, 1);
  }

  onReset() {
    this.ator = new Filme_Atores();
    this.focus_nome = false;
    this.focus_personagem = false;
    this.nomeMudou = false;
    this.personagemMudou = false;
  }

}
