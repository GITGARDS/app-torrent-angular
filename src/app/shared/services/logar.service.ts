import { map } from "rxjs";
import { Observable } from "rxjs";
import { EventEmitterService, Usuario, UsuarioService } from "src/app/shared";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogarService {
  constructor(private usuarioService: UsuarioService) {}

  private autenticado: boolean = false;
  private usuarioLogado: Usuario = new Usuario();

  login(par: Usuario): Observable<Usuario> {
    return this.usuarioService.findbyautentica(par).pipe(map((ret) => ret));
  }

  logout() {
    this.autenticado = false;
    this.limparClasse();
    EventEmitterService.get("ev_usuario").emit(false);
    EventEmitterService.get("ev_mostraopcoes").emit(false);
  }

  limparClasse() {
    this.usuarioLogado._id = "";
    this.usuarioLogado.nome = "";
    this.usuarioLogado.email = "";
    this.usuarioLogado.senha = "";
    this.usuarioLogado.tipo = 0;
    this.usuarioLogado.data_cad = "";
    this.usuarioLogado.__v = 0;
  }

  getAutenticado() {
    return this.autenticado;
  }

  getUsuarioLogado() {
    return this.usuarioLogado;
  }

  setUsuarioLogado(valor: Usuario) {
    this.usuarioLogado = valor;
    this.autenticado = true;
    this.setMostrarOpcoes();
    EventEmitterService.get("ev_usuario").emit(true);
  }

  setMostrarOpcoes() {
    EventEmitterService.get("ev_mostraopcoes").emit(this.getMostrarOpcoes());
  }

  getMostrarOpcoes() {
    if (this.getAutenticado() && this.getUsuarioLogado().tipo === 1) {
      return true;
    } else {
      return false;
    }
  }
}
