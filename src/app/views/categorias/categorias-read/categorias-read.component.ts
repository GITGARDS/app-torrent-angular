import { map, Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Categoria, CategoriaService, MsgService } from "src/app/shared";

@Component({
  selector: "app-categorias-read",
  templateUrl: "./categorias-read.component.html",
  styleUrls: ["./categorias-read.component.css"],
})
export class CategoriasReadComponent implements OnInit {
  categorias$: Observable<Categoria[]> | undefined = new Observable<
    Categoria[]
  >();
  categorias: Categoria[] = [];

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private categoriaService: CategoriaService,
    private msgService: MsgService
  ) {}
  ev() {}

  ngOnInit(): void {
    this.ev();
    this.getCategorias();
  }

  getCategorias() {
    this.categorias$ = this.activateRoute.data.pipe(
      map((data) => {
        return data["categoriasreadRV"];
      })
    );
    this.categorias$.subscribe((data) => {
      if (data.length === undefined) {
        this.router.navigate(["categorias", "404"]);
      }
    });
  }

  onEditar(item: any) {
    this.router.navigate(["categorias", "editar", item]);
  }

  onExcluir(item: Categoria) {
    if (window.confirm("Deseja realmente excluir o registro!")) {
      this.categoriaService
        .excluir(item)
        .pipe()
        .subscribe(
          (success) => {
            this.msgService.showMessage("Registro excluido com sucesso!");
            window.location.reload();
          },
          (error) => {
            this.msgService.showMessage(
              "Erro ao tentar excluir registro. Tente novamente!"
            );
            window.location.reload();
          }
        );
    }
  }
}
