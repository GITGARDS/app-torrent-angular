import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { Categoria, CategoriaService, MsgService } from "src/app/shared";

@Component({
  selector: "app-categorias-form",
  templateUrl: "./categorias-form.component.html",
  styleUrls: ["./categorias-form.component.css"],
})
export class CategoriasFormComponent implements OnInit {
  categorias$: Observable<Categoria> | undefined = new Observable();
  categoria: Categoria = new Categoria();
  title: string = "Categorias";
  submitted = false;
  editar = true;

  ccategorias: string = "";

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private msgService: MsgService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.getCategoria();
    this.onTitle();
  }

  onTitle() {
    console.log("opcao =>>", this.categoria._id);
    if (this.categoria._id) {
      this.title = "Alterar";
      this.editar = true;
    } else {
      this.title = "Novo";
      this.editar = false;
    }
  }

  getCategoria() {
    this.categorias$ = this.activateRoute.data.pipe(
      map((data) => data["categoriasformRV"])
    );
    this.categorias$.subscribe((data) => {
      this.categoria = data;
    });
  }

  submitMethod() {
    this.submitted = true;
    let msgSuccess = "Registro criado com sucesso!";
    let msgError = "Erro ao criar registro. Tente novamente!";
    if (this.categoria._id) {
      msgSuccess = "Registro alterado com sucesso!";
      msgError = "Erro ao alterar registro. Tente novamente!";
    }
    this.onSalvar(msgSuccess, msgError);
  }

  onSalvar(msgSuccess: string, msgError: string) {
    this.categoriaService
      .salvar(this.categoria!)
      .pipe()
      .subscribe(
        (success) => {
          this.msgService.showMessage(msgSuccess);
          this.sair();
        },
        (error) => {
          this.msgService.showMessage(msgError);
          this.sair();
        }
      );
  }

  sair() {
    this.router.navigate(["categorias", "read"]);
  }
}
