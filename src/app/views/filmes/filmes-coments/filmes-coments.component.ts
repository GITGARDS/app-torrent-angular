import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import {
  EventEmitterService,
  Filme_Comentarios,
  Filme_ComentarioService,
  MsgService,
} from "src/app/shared";

@Component({
  selector: "app-filmes-coments",
  templateUrl: "./filmes-coments.component.html",
  styleUrls: ["./filmes-coments.component.css"],
})
export class FilmesComentsComponent implements OnInit {
  coments$: Observable<Filme_Comentarios[]> = new Observable<
    Filme_Comentarios[]
  >();

  coment: Filme_Comentarios = new Filme_Comentarios();

  focus_coment = false;
  focus_nome = false;
  focus_email = false;

  comentMudou = false;
  nomeMudou = false;
  emailMudou = false;

  oninputcoment() {
    if (this.coment.comentario!.length > 0) {
      this.comentMudou = true;
    } else {
      this.comentMudou = false;
    }
  }
  oninputnome() {
    if (this.coment.nome!.length > 0) {
      this.nomeMudou = true;
    } else {
      this.nomeMudou = false;
    }
  }
  oninputemail() {
    if (this.coment.email!.length > 0) {
      this.emailMudou = true;
    } else {
      this.emailMudou = false;
    }
  }

  filme_id = this.activatedRoute.snapshot.paramMap.get("id");

  constructor(
    private filme_ComentarioService: Filme_ComentarioService,
    private activatedRoute: ActivatedRoute,
    private msgService: MsgService
  ) {}

  ev() {
    EventEmitterService.get("ev_filme_id").subscribe((ret) => {
      this.getComents(ret);
    });
  }

  ngOnInit(): void {
    this.ev();
    this.getComents(this.filme_id);
  }

  getComents(id: any) {
    console.log("id do filme", id);
    this.coments$ = this.filme_ComentarioService.findall({
      filme_id: id,
    });
  }

  onComentar() {
    this.coment.filme_id = this.filme_id!;

    this.filme_ComentarioService
      .salvar(this.coment!)
      .pipe()
      .subscribe(
        (success) => {
          this.msgService.showMessage("Comentario adicionado com sucesso!");
          this.onResetar();
          this.getComents(this.filme_id);
        },
        (error) => {
          this.msgService.showMessage("Erro ao tentar adicionar comentario!");
        }
      );
  }
  onCancelar() {
    this.onResetar();
  }

  onResetar() {
    this.coment.comentario = "";
    this.coment.nome = "";
    this.coment.email = "";
    this.comentMudou = false;
    this.nomeMudou = false;
    this.emailMudou = false;
  }
}
