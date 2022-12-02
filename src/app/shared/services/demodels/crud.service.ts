import { catchError, first, map, Observable, of, take } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CrudService<T> {

  constructor(
    public httpClient: HttpClient,
    public urlBase: String
    ) {}

  /* 
  ROUTES PADRAO
  ------
  /novo, 
  /editar,
  /excluir/:id
  /findall
  /findbyid/:id
  ------------
  FINAL ROUTES
  */

  salvar(body: any) {
    if (!body._id) {
      return this.novo(body);
    }
    return this.editar(body);
  }

  novo(body: T): Observable<T> {
    const url = `${this.urlBase}/novo`;
    console.log("novo..:", body);
    return this.httpClient.post<T>(url, body)
    .pipe(map((obj) => obj));
  }

  editar(body: T): Observable<T> {
    const url = `${this.urlBase}/editar`;
    console.log("url update==>", url);
    return this.httpClient.put<T>(url, body)
    .pipe(map((obj) => obj));
  }

  excluir(body: any): Observable<T> {
    const url = `${this.urlBase}/excluir/${body._id}`;
    console.log("url delete==>", url);
    return this.httpClient.delete<T>(url).pipe(
      catchError((error) => {
        return of();
      }),
      // first(),
      // delay(1000),
      map((obj) => obj)
      // take(1)
    );
  }

  findbyid(id: any): Observable<T> {
    console.log("findyid: ", id);
    const url = `${this.urlBase}/findbyid/${id}`;
    return this.httpClient.get<T>(url).pipe(
      catchError((error) => {
        return of();
      }),
      first(),
      // delay(200),
      map((obj) => obj),
      take(1)
    );
  }
}
