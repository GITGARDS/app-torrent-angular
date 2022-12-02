import { FilmesInfoComponent } from "./filmes-info/filmes-info.component";
import { FilmesReadComponent } from "./filmes-read/filmes-read.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../templates/not-found/not-found.component";
import { FilmesComponent } from "./filmes.component";
import { FilmesFormComponent } from "./filmes-form/filmes-form.component";
import { FilmesFormResolver } from "src/app/shared/resolvers/filmes/filmes-form.resolver";

const routes: Routes = [
  {
    path: "",
    component: FilmesComponent,
    children: [
      {
        path: "novo",
        resolve: { filmeformRV: FilmesFormResolver },
        component: FilmesFormComponent,
      },
      {
        path: "read/:id",
        component: FilmesReadComponent,
      },
      {
        path: "editar/:id",
        resolve: { filmeformRV: FilmesFormResolver },
        component: FilmesFormComponent,
      },
      {
        path: "info/:id",
        component: FilmesInfoComponent,
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
export class FilmesRoutingModule {}
