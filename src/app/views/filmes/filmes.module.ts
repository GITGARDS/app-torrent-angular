import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FilmesRoutingModule } from "./filmes-routing.module";
import { FilmesComponent } from "./filmes.component";
import { FilmesReadComponent } from "./filmes-read/filmes-read.component";
import { FilmesInfoComponent } from "./filmes-info/filmes-info.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilmesFormComponent } from "./filmes-form/filmes-form.component";
import { FilmesComentsComponent } from "./filmes-coments/filmes-coments.component";
import { FilmesFormAtoresComponent } from "./filmes-form/filmes-form-atores/filmes-form-atores.component";
import { FilmesFormLinksComponent } from "./filmes-form/filmes-form-links/filmes-form-links.component";
import { FilmesFormCategoriasComponent } from "./filmes-form/filmes-form-categorias/filmes-form-categorias.component";
import { FilmesReadCategoriaComponent } from "./filmes-read/filmes-read-categoria/filmes-read-categoria.component";
import { FilmesReadCategoriaCardComponent } from "./filmes-read/filmes-read-categoria/filmes-read-categoria-card/filmes-read-categoria-card.component";
import { TemplatesModule } from "../templates/templates.module";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { NgxMaskModule } from "ngx-mask";
import { IConfig } from "ngx-mask/lib/config";
import { FilmesSearchComponent } from './filmes-search/filmes-search.component';
import { FilmesSearchCardComponent } from './filmes-search/filmes-search-card/filmes-search-card.component';
import { FilmesReadCategoriaCard2Component } from './filmes-read/filmes-read-categoria/filmes-read-categoria-card2/filmes-read-categoria-card2.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    FilmesComponent,
    FilmesReadComponent,
    FilmesReadCategoriaCardComponent,
    FilmesInfoComponent,
    FilmesFormComponent,
    FilmesComentsComponent,
    FilmesFormAtoresComponent,
    FilmesFormLinksComponent,
    FilmesFormCategoriasComponent,
    FilmesReadCategoriaComponent,
    FilmesSearchComponent,
    FilmesSearchCardComponent,
    FilmesReadCategoriaCard2Component,
  ],

  imports: [
    CommonModule,
    FilmesRoutingModule,
    HttpClientModule,
    FormsModule,
    TemplatesModule,
    PaginationModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
})
export class FilmesModule {}
