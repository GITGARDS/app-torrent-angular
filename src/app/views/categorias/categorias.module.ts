import { TemplatesModule } from './../templates/templates.module';
import { CategoriasReadComponent } from './categorias-read/categorias-read.component';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriasRoutingModule } from "./categorias-routing.module";
import { CategoriasComponent } from "./categorias.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CategoriasComponent,
    CategoriasFormComponent,
    CategoriasReadComponent,
  ],
  imports: [CommonModule, CategoriasRoutingModule, HttpClientModule, FormsModule, TemplatesModule],
})
export class CategoriasModule {}
