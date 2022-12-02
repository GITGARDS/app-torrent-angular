import { Filme_Links } from "src/app/shared";
import { Filme_Atores } from "src/app/shared";
import { Categoria } from "src/app/shared";

export class Filme {
  public _id: string | undefined;
  public titulo: string | undefined;
  public classificacao: number | undefined;
  public duracao: number | undefined;
  public idioma: string | undefined;
  public nacionalidade: string | undefined;
  public legendas: string | undefined;
  public informacao: string | undefined;
  public produtora: string | undefined;
  public formato: string | undefined;
  public franquia: string | undefined;
  public qualidade: string | undefined;
  public tamanho: number | undefined;
  public critica: number | undefined;
  public resenha: string | undefined;
  public diretor: string | undefined;
  public link_trailer: string | undefined;
  public link_capa: string | undefined;

  public categorias: Categoria[] = [];
  public atores: Filme_Atores[] = [];
  public links: Filme_Links[] = [];

  public lancamento: number | undefined;
  public downloads: number | undefined;
  public data_cad: string | undefined;
  public __v: number | undefined;
}
