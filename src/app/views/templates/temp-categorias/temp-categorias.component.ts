import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { Categoria, EventEmitterService } from "src/app/shared";

@Component({
  selector: "app-temp-categorias",
  templateUrl: "./temp-categorias.component.html",
  styleUrls: ["./temp-categorias.component.css"],
})
export class TempCategoriasComponent implements OnInit {
  @Input() texto: Categoria[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onclick(item: Categoria) {
    console.log("temp_categorias: ", item._id, item.nome);

    EventEmitterService.get("ev_categoria_id").emit(item._id);
  }
}
