import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable } from "rxjs";
import {
  Filme,
  MsgService,
  FilmeService,
  EventEmitterService,
} from "src/app/shared";

@Component({
  selector: "app-filmes-form",
  templateUrl: "./filmes-form.component.html",
  styleUrls: ["./filmes-form.component.css"],
})
export class FilmesFormComponent implements OnInit {
  filme$: Observable<Filme> = new Observable<Filme>();
  filme: Filme = new Filme();

  title: string = "titulo";
  editar = false;

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private msgService: MsgService,
    private filmeService: FilmeService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFilme();
    this.onTitle();
    switch (this.editar) {
      case false:
        this.filme.idioma = "Dublado / Inglês / Português 5.1";
        this.filme.legendas = "Portugues";
        this.filme.informacao = "Completo";
        this.filme.formato = " MKV / MP4";        
        break;    
    }
    this.createForm(this.filme);
  }

  createForm(model: Filme) {
    this.formulario = this.formBuilder.group({
      titulo: [model.titulo, [Validators.required]],
      classificacao: [model.classificacao],
      duracao: [model.duracao],
      idioma: [model.idioma],
      nacionalidade: [model.nacionalidade],
      legendas: [model.legendas],
      informacao: [model.informacao],
      produtora: [model.produtora],
      formato: [model.formato],
      franquia: [model.franquia],
      qualidade: [model.qualidade],
      tamanho: [model.tamanho],
      critica: [model.critica],
      resenha: [model.resenha],
      diretor: [model.diretor],
      link_trailer: [model.link_trailer, [Validators.required]],
      link_capa: [model.link_capa, [Validators.required]],
      categorias: [model.categorias],
      atores: [model.atores],
      links: [model.links],
      lancamento: [model.lancamento],
    });
  }

  getFilme() {
    this.filme$ = this.activateRoute.data.pipe(
      map((data) => data["filmeformRV"])
    );
    this.filme$.subscribe((data) => {
      this.filme = data;
    });
  }

  onTitle() {
    console.log("opcao =>>", this.filme._id);
    if (this.filme._id) {
      this.title = "Alterar";
      this.editar = true;
    } else {
      this.title = "Novo";
      this.editar = false;
    }
  }

  app_campo_control_erro(campo: any) {
    return (
      this.formulario.get(campo)?.invalid &&
      this.formulario.get(campo)?.touched &&
      this.formulario.get(campo)?.dirty
    );
  }

  aplicaCssErro(campo: any) {
    return {
      "has-not-error": !this.app_campo_control_erro(campo),
      "has-error": this.app_campo_control_erro(campo),
    };
  }

  onSubmit() {
    let msgSuccess = "Registro adicionado com sucesso!";
    let msgError = "Erro ao tentar adicionar registro. Tente novamente!";
    if (this.filme._id) {
      msgSuccess = "Registro alterado com sucesso!";
      msgError = "Erro ao alterar registro. Tente novamente!";
    }
    this.onSalvar(msgSuccess, msgError);
  }

  onSalvar(msgSuccess: string, msgError: string) {
    console.log("onSalvar", this.filme);
    this.filmeService
      .salvar(this.form_to_model(this.filme, this.formulario))
      .pipe()
      .subscribe(
        (success) => {
          this.msgService.showMessage(msgSuccess);
          this.sair();
        },
        (error) => {
          this.msgService.showMessage(msgError);
          this.sair();
        }
      );
  }

  form_to_model(m: Filme, f: FormGroup) {
    m.titulo = f.controls["titulo"].value;
    m.classificacao = f.controls["classificacao"].value;
    m.duracao = f.controls["duracao"].value;
    m.idioma = f.controls["idioma"].value;
    m.nacionalidade = f.controls["nacionalidade"].value;
    m.legendas = f.controls["legendas"].value;
    m.informacao = f.controls["informacao"].value;
    m.produtora = f.controls["produtora"].value;
    m.formato = f.controls["formato"].value;
    m.franquia = f.controls["franquia"].value;
    m.qualidade = f.controls["qualidade"].value;
    m.tamanho = f.controls["tamanho"].value;
    m.critica = f.controls["critica"].value;
    m.resenha = f.controls["resenha"].value;
    m.diretor = f.controls["diretor"].value;
    m.link_trailer = f.controls["link_trailer"].value;
    m.link_capa = f.controls["link_capa"].value;
    m.categorias = f.controls["categorias"].value;
    m.atores = f.controls["atores"].value;
    m.links = f.controls["links"].value;
    m.lancamento = f.controls["lancamento"].value;
    return m;
  }

  sair() {
    EventEmitterService.get("ev_mudar_tela").emit(false);
    this.router.navigate(["/filmes"]);
  }
}
