import { Filme, FilmeService } from "src/app/shared";
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
export class FilmesFormResolver implements Resolve<Filme> {
  constructor(private filmeService: FilmeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Filme | Observable<Filme> {
    if (route.params && route.params["id"]) {
      return this.filmeService.findbyid(route.params["id"]);
    }
    return of(new Filme());
  }
}
