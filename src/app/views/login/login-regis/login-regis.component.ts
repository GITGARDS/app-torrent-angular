import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MsgService, Usuario, UsuarioService } from "src/app/shared";

@Component({
  selector: "app-login-regis",
  templateUrl: "./login-regis.component.html",
  styleUrls: ["./login-regis.component.css"],
})
export class LoginRegisComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private msgService: MsgService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  gravar() {
    if (this.usuario.nome && this.usuario.email && this.usuario.senha) {
      let msgSuccess = "Registro criado com sucesso!";
      let msgError = "Erro ao criar registro. Tente novamente!";
      this.onSalvar(msgSuccess, msgError);
    }
  }

  onSalvar(msgSuccess: string, msgError: string) {
    if (this.usuario.nome && this.usuario.email && this.usuario.senha) {
      this.usuarioService
        .novo(this.usuario)
        .pipe()
        .subscribe(
          (success) => {
            this.msgService.showMessage(msgSuccess);
            this.logar();
          },
          (error) => {
            this.msgService.showMessage(msgError);
            this.logar();
          }
        );
    }
  }

  cancelar() {
    this.router.navigate(["home"]);
  }

  logar() {
    this.router.navigate(["login", "logar"]);
  }
}
