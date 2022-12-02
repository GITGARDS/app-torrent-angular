import { CategoriasComponent } from "./categorias.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../templates/not-found/not-found.component";
import { CategoriasReadComponent } from "./categorias-read/categorias-read.component";
import { CategoriasReadResolver } from "src/app/shared/resolvers/categorias/categorias-read.resolver";
import { CategoriasFormComponent } from "./categorias-form/categorias-form.component";
import { CategoriasFormResolver } from "src/app/shared/resolvers/categorias/categorias-form.resolver";

const routes: Routes = [
  {
    path: "",
    component: CategoriasComponent,
    children: [
      {
        path: "read",
        resolve: { categoriasreadRV: CategoriasReadResolver },
        component: CategoriasReadComponent,
      },
      {
        path: "novo",
        component: CategoriasFormComponent,
        resolve: { categoriasformRV: CategoriasFormResolver },
      },
      {
        path: "editar/:id",
        component: CategoriasFormComponent,
        resolve: { categoriasformRV: CategoriasFormResolver },
      },
      {
        path: "404",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasRoutingModule {}
