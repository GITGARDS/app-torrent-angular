import { LoginLogarComponent } from './login-logar/login-logar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginRegisComponent } from './login-regis/login-regis.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: [  
    LoginComponent,
    LoginLogarComponent,
    LoginRegisComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    FormsModule, 
    TemplatesModule
  ]
})
export class LoginModule { }
