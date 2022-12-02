import { CrudService, Usuario } from "src/app/shared";
import { debounceTime, delay, of } from "rxjs";
import { take } from "rxjs";
import { first, map } from "rxjs";
import { Observable, catchError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsuarioService extends CrudService<Usuario> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.API}/usuario`);
  }

  /* 
  ROUTES PADRAO
  ------
  /findbynome
  /findbyautentica
  ------------
  FINAL ROUTES
  */

  findall(): Observable<Usuario[]> {
    const url = `${this.urlBase}/findall`;
    return this.httpClient.get<Usuario[]>(url).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(5000),
      map((obj) => obj),
      take(1)
    );
  }

  findbynome(body: Usuario): Observable<Usuario[]> {
    const url = `${this.urlBase}/findbynome`;
    return this.httpClient.post<Usuario[]>(url, body).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(200),
      map((obj) => obj),
      take(1)
    );
  }

  findbyautentica(body: Usuario): Observable<Usuario> {
    const url = `${this.urlBase}/findbyautentica`;
    return this.httpClient.post<Usuario>(url, body).pipe(
      catchError((error) => {
        return of();
      }),
      first(),
      map((obj) => obj),
      take(1)
    );
  }
}
