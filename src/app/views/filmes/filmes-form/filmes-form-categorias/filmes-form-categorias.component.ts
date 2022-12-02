import { Observable } from "rxjs";
import { Categoria, CategoriaService } from "src/app/shared";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-filmes-form-categorias",
  templateUrl: "./filmes-form-categorias.component.html",
  styleUrls: ["./filmes-form-categorias.component.css"],
})
export class FilmesFormCategoriasComponent implements OnInit {
  categoria$: Observable<Categoria[]> = new Observable();

  @Input() categorias: Categoria[] = [];

  categoria: Categoria = new Categoria();

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoria$ = this.categoriaService.findall();
  }

  onChange() {
    if (this.categoria) {
      this.categorias.push(this.categoria);
      this.onReset();
    }
  }

  onCancelar() {
    this.onReset();
  }

  onExcluir(i: any) {
    this.categorias?.splice(i, 1);
  }

  onReset() {
    this.categoria = new Categoria();
  }
}
