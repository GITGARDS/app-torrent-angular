import { Categoria, CrudService } from "src/app/shared";
import { catchError, first, map, Observable, of, take } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoriaService extends CrudService<Categoria> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.API}/categoria`);
  }

  findall(): Observable<Categoria[]> {
    const url = `${this.urlBase}/findall`;
    return this.httpClient.get<Categoria[]>(url).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(5000),
      map((obj) => obj),
      take(1)
    );
  }

  findbynome(body: Categoria): Observable<Categoria[]> {
    const url = `${this.urlBase}/findbynome`;
    return this.httpClient.post<Categoria[]>(url, body.nome).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(200),
      map((obj) => obj),
      take(1)
    );
  }
}
