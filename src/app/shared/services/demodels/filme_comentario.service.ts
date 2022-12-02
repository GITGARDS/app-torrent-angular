import { CrudService, Filme_Comentarios } from "src/app/shared";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { take } from "rxjs";
import { catchError, first, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class Filme_ComentarioService extends CrudService<Filme_Comentarios> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.API}/filme_comentarios`);
  }

  findall(body: any): Observable<Filme_Comentarios[]> {
    console.log("coment: body", body);
    const url = `${this.urlBase}/findall`;
    return this.httpClient.post<Filme_Comentarios[]>(url, body).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(5000),
      map((obj) => obj),
      take(1)
    );
  }
}
