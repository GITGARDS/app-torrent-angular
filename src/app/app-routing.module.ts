import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/templates/home/home.component";
import { NotFoundComponent } from "./views/templates/not-found/not-found.component";

const routes: Routes = [
  {
    path: "categorias",
    loadChildren: () =>
      import("../app/views/categorias/categorias.module").then((mod) => {
        return mod.CategoriasModule;
      }),
  },
  {
    path: "filmes",
    loadChildren: () =>
      import("../app/views/filmes/filmes.module").then((mod) => {
        return mod.FilmesModule;
      }),
  },
  {
    path: "login",
    loadChildren: () =>
      import("../app/views/login/login.module").then((mod) => {
        return mod.LoginModule;
      }),
  },

  {
    path: "home",
    component: HomeComponent,
  },

  { path: "", redirectTo: "/filmes", pathMatch: "full" },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
