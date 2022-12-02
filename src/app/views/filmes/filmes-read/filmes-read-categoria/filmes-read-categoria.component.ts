import { Observable } from "rxjs";

import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  AfterViewInit,
  Output,
  ViewChild,
  ViewChildren,
  QueryList,
} from "@angular/core";
import {
  Categoria,
  CategoriaService,
  EventEmitterService,
  LogarService,
} from "src/app/shared";

@Component({
  selector: "app-filmes-read-categoria",
  templateUrl: "./filmes-read-categoria.component.html",
  styleUrls: ["./filmes-read-categoria.component.css"],
})
export class FilmesReadCategoriaComponent implements OnInit, AfterViewInit {
  categorias$: Observable<Categoria[]> = new Observable();
  categorias: Categoria[] = [];
  mostrarOpcoes = false;

  categoriaClicou = false;

  constructor(
    private categoriaService: CategoriaService,
    private logarService: LogarService
  ) {}

  @Output() retorno = new EventEmitter<Categoria>();

  ev() {
    EventEmitterService.get("ev_mostraopcoes").subscribe((ret) => {
      this.mostrarOpcoes = ret;
    });

    EventEmitterService.get("ev_categoria_id").subscribe((ret) => {
      let i = 0;
      this.categorias.forEach((element, index) => {
        if (element._id === ret) {
          i = index;
        }
      });
      this.onCategoriaClick(this.categorias[i], i);
    });
  }

  ngOnInit(): void {
    this.ev();
    this.mostrarOpcoes = this.logarService.getMostrarOpcoes();
    this.getCategorias();
  }

  ngAfterViewInit(): void {
    this.onCategoriaClick(
      {
        _id: "999",
        nome: "Todos",
        icone: "bi bi-check-all",
        __v: undefined,
      },
      0
    );
  }

  getCategorias() {
    console.log("getCategoria");
    this.categorias$ = this.categoriaService.findall();

    this.categorias$.subscribe((ret) => {
      let item = new Categoria();
      item._id = "999";
      item.nome = "Todos";
      item.icone = "bi bi-check-all";
      ret.splice(0, 0, item);
      this.categorias = ret;
    });
  }

  @ViewChildren("citem") citem!: QueryList<any>;

  onCategoriaClick(item: Categoria, i: number) {
    // console.log("citem", this.citem);
    console.log("categoria index", i);

    this.citem.forEach((element, index) => {
      console.log("foreach: ", index);

      if (index === i) {
        element.nativeElement.style.backgroundColor = "var(--nav-active)";
        element.nativeElement.style.color = "#fff";
      } else {
        element.nativeElement.style.backgroundColor = "var(--nav-bc)";
        element.nativeElement.style.color = "#222";
      }
    });
    this.retorno.emit(item);
  }

  @ViewChild("listaScrool") listaScrool!: ElementRef;

  public onClickLeft(): void {
    this.listaScrool.nativeElement.scrollTo({
      left: this.listaScrool.nativeElement.scrollLeft - 150,
      behavior: "smooth",
    });
  }

  public onClickRight(): void {
    this.listaScrool.nativeElement.scrollTo({
      left: this.listaScrool.nativeElement.scrollLeft + 150,
      behavior: "smooth",
    });
  }
}
