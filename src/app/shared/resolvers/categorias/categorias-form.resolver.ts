import { Categoria, CategoriaService } from 'src/app/shared';
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CategoriasFormResolver implements Resolve<Categoria> {
  constructor(private categoriaService: CategoriaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Categoria | Observable<Categoria> {
    if (route.params && route.params["id"]) {
      return this.categoriaService.findbyid(route.params["id"]);
    }
    return of(new Categoria());
  }
}
