import { HeaderComponent } from "./header/header.component";
import { TempAtoresComponent } from "./temp-atores/temp-atores.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TempCategoriasComponent } from "./temp-categorias/temp-categorias.component";
import { TempComentsComponent } from "./temp-coments/temp-coments.component";
import { TempLinkComponent } from "./temp-link/temp-link.component";
import { TempTituloComponent } from "./temp-titulo/temp-titulo.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HeaderMenuComponent } from "./header/header-menu/header-menu.component";
import { HeaderLoginComponent } from "./header/header-login/header-login.component";
import { HeaderLogoComponent } from "./header/header-logo/header-logo.component";
import { HeaderLoginUserComponent } from './header/header-login/header-login-user/header-login-user.component';
import { HeaderLoginBotaoComponent } from './header/header-login/header-login-botao/header-login-botao.component';
import { CampoControlErroComponent } from "./campo-control-erro/campo-control-erro.component";

@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    TempAtoresComponent,
    TempCategoriasComponent,
    TempComentsComponent,
    TempLinkComponent,
    TempTituloComponent,
    HeaderLoginUserComponent,
    HeaderLoginBotaoComponent,
    CampoControlErroComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderMenuComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    TempAtoresComponent,
    TempCategoriasComponent,
    TempComentsComponent,
    TempLinkComponent,
    TempTituloComponent,
    CampoControlErroComponent
  ],
})
export class TemplatesModule {}
