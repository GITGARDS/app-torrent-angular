import { LogarService, MsgService, Usuario } from "src/app/shared";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { async, map } from "rxjs";
import { json } from "express";

@Component({
  selector: "app-login-logar",
  templateUrl: "./login-logar.component.html",
  styleUrls: ["./login-logar.component.css"],
})
export class LoginLogarComponent implements OnInit {
  usuario: Usuario = new Usuario();

  loading = false;

  constructor(
    private location: Location,
    private logarService: LogarService,
    private router: Router,
    private msgService: MsgService

  ) {}

  ngOnInit(): void {
    this.logarService.logout();
    // this.usuario.email = "admin@email.com";
    // this.usuario.senha = "4353";
  }

  login(item: Usuario) {
    this.loading = true;
    this.logarService
      .login(item)
      .pipe(map((ret: Usuario) => ret))
      .subscribe(
        (ret) => {
          this.loading = false;
          if (ret.email === item.email && ret.senha === item.senha) {
            this.usuarioAutenticado(ret);
            this.home();
          } else {
            this.mensagem("Usuario Invalido, ou nao cadastrado!!")
          }
        },
        (erro) => {
          this.loading = false;
          this.mensagem("Aconteu algum erro, tente mais tarde!")
        }
      );
  }

  usuarioAutenticado(valor: Usuario){
    this.logarService.setUsuarioLogado(valor);
  }

  home() {
    this.location.back();
  }

  registrar() {
    this.router.navigate(["login", "regis"]);
  }

  mensagem(valor: any){
    this.msgService.showMessage(valor);
  }
}
