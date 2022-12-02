import { Component, OnInit } from "@angular/core";
import { EventEmitterService, LogarService, Usuario } from "src/app/shared";

@Component({
  selector: "app-header-login",
  templateUrl: "./header-login.component.html",
  styleUrls: ["./header-login.component.css"],
})
export class HeaderLoginComponent implements OnInit {
  usuario!: Usuario;
  constructor(private logarService: LogarService) {}

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
  }

  getUsuarioService() {
    this.usuario = this.logarService.getUsuarioLogado();
  }
}
