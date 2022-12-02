import { Categoria, CategoriaService } from 'src/app/shared';
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CategoriasReadResolver implements Resolve<Categoria[]> {
  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Categoria[]> {
    return this.categoriaService.findall();
  }
}
