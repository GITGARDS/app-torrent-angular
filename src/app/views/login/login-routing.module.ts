import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../templates/not-found/not-found.component";
import { LoginLogarComponent } from "./login-logar/login-logar.component";
import { LoginRegisComponent } from "./login-regis/login-regis.component";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [
      {
        path: "logar",
        component: LoginLogarComponent,
      },
      {
        path: "regis",
        component: LoginRegisComponent,
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
export class LoginRoutingModule {}
