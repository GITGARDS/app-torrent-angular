import { Observable, Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router, TitleStrategy } from "@angular/router";
import {
  EventEmitterService,
  Filme,
  FilmeService,
  LogarService,
} from "src/app/shared";

@Component({
  selector: "app-filmes-info",
  templateUrl: "./filmes-info.component.html",
  styleUrls: ["./filmes-info.component.css"],
})
export class FilmesInfoComponent implements OnInit {
  filme$: Observable<Filme> = new Observable<Filme>();
  filme: Filme = new Filme();
  viframe: any | undefined;

  mostrarOpcoes: boolean = true;


  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private filmeService: FilmeService,
    private domSanitizer: DomSanitizer,
    private logarService: LogarService
  ) {}

  ev() {
    EventEmitterService.get("ev_mostraopcoes").subscribe(
      (ret) => (this.mostrarOpcoes = ret)
    );

    EventEmitterService.get("ev_filme_id").subscribe((ret) => {
      this.getFilme(ret);
    });
  }

  ngOnInit(): void {
    this.ev();
    this.mostrarOpcoes = this.logarService.getMostrarOpcoes();
    this.getFilme(this.activateRoute.snapshot.paramMap.get("id"));

  }

  getFilme(id: any) {
    this.filme$ = this.filmeService.findbyid(id);
    this.filme$.subscribe((ret) => {
      this.filme = ret;
      this.viframe = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.filme.link_trailer!
      );
    });
  }

  onVoltar() {
    EventEmitterService.get("ev_mudar_tela").emit(false);
  }

}
