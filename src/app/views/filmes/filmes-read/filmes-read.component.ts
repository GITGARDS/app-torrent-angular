import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import {
  EventEmitterService,
  Filme,
  FilmeService,
  LogarService,
  Pagina,
} from "src/app/shared";
import { ActivatedRoute, Router } from "@angular/router";
import { PageChangedEvent } from "ngx-bootstrap/pagination";

@Component({
  selector: "app-filmes-read",
  templateUrl: "./filmes-read.component.html",
  styleUrls: ["./filmes-read.component.css"],
})
export class FilmesReadComponent implements OnInit {
  filmes$: Observable<Filme[]> = new Observable();
  categoria_id: string = "999";
  categoria_titulo: string = "Todos";
  carregando = true;

  // paginacao inicio
  pagina: Pagina = new Pagina();

  itemsPerPage = 10;
  showBoundaryLinks = false;
  currentPage: number = 1;
  totalItems = 0;
  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.pagina.p = this.currentPage;
    this.pagina.ipp = this.itemsPerPage;
    this.getFilmes(this.categoria_id, this.pagina);
  }
  // paginacao fim

  mostrarOpcoes = true;

  mudar = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logarService: LogarService,
    private filmeService: FilmeService
  ) {}
  ev() {
    EventEmitterService.get("ev_mostraopcoes").subscribe(
      (ret) => (this.mostrarOpcoes = ret)
    );

    EventEmitterService.get("ev_mudar_tela").subscribe((ret) => {
      (this.mudar = ret), console.log("mudar", this.mudar);
    });
  }
  ngOnInit(): void {
    this.ev();
    this.mostrarOpcoes = this.logarService.getMostrarOpcoes();
    this.pagina.p = 1;
    this.pagina.ipp = this.itemsPerPage;
    this.getFilmes(this.categoria_id, this.pagina);
  }

  getFilmes(categoria: any, pagina: any) {
    this.carregando = true;
    this.filmes$ = this.filmeService.findall(categoria || 999, pagina);
    this.filmes$.subscribe(() => {
      this.carregando = false;
    });

    this.getFilmesLength(categoria);
  }

  retornoCategoria(event: any) {
    this.categoria_titulo = event.nome;
    this.categoria_id = event._id;
    this.currentPage = 1;
    this.pagina.p = this.currentPage;
    this.pagina.ipp = this.itemsPerPage;
    this.getFilmes(this.categoria_id, this.pagina);
  }

  onNovo() {
    EventEmitterService.get("ev_mudar_tela").emit(true);
    this.router.navigate(["/filmes", "novo"]);
  }

  getFilmesLength(categoria: any) {
    this.filmeService
      .length(categoria)
      .pipe((total) => total)
      .subscribe((ret) => {
        this.totalItems = ret.total;
        console.log("otal de itens", this.totalItems);
      });
  }
}
