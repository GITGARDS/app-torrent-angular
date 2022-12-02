import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  EventEmitterService,
  LogarService,
  MsgService,
  Usuario,
} from "src/app/shared";

@Component({
  selector: "app-header-login-botao",
  templateUrl: "./header-login-botao.component.html",
  styleUrls: ["./header-login-botao.component.css"],
})
export class HeaderLoginBotaoComponent implements OnInit {
  usuario!: Usuario;

  constructor(
    private router: Router,
    private logarService: LogarService,
    private msgService: MsgService
  ) {}

  ev() {
    EventEmitterService.get("ev_usuario").subscribe((ret) => {
      if (ret) {
        this.getUsuarioService();
      }
    });
  }

  ngOnInit(): void {
    this.ev();
    this.getUsuarioService();
    console.log("usuario", this.usuario);
  }

  getUsuarioService() {
    this.usuario = this.logarService.getUsuarioLogado();
    if (this.usuario.email) {
      this.msgService.showMessage("Usuario logado com sucess!");
    }
  }

  deslogar() {
    this.logarService.logout();
    this.msgService.showMessage("Usuario deslogado com sucess!");
  }

  onLogin() {
    this.router.navigate(["/login", "logar"]);
  }
}
