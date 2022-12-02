import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  Categoria,
  CategoriaService,
  EventEmitterService,
  LogarService,
} from "src/app/shared";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  categorias$: Observable<Categoria[]> = new Observable();
  mostrarOpcoes = true;

  constructor(
    private router: Router,
    private categoriasService: CategoriaService,
    private logarService: LogarService
  ) {}

  ev() {
    EventEmitterService.get("ev_mostraopcoes").subscribe(
      (ret) => (this.mostrarOpcoes = ret)
    );
  }

  ngOnInit(): void {
    this.ev();
    this.mostrarOpcoes = this.logarService.getMostrarOpcoes();
    this.getCategorias();
  }

  getCategorias() {
    this.categorias$ = this.categoriasService.findall();
  }

  onClickCategoria(item: any) {
    this.router.navigate(["/filmes", "read", item]);
  }
}
