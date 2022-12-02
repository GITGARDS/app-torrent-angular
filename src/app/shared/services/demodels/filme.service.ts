import { CrudService, Filme, Pagina } from "src/app/shared";
import { catchError, first, map, Observable, of, take } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FilmeService extends CrudService<Filme> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.API}/filme`);
  }

  findall(id: any, pagina: Pagina): Observable<Filme[]> {
    const url = `${this.urlBase}/findall/${id}`;
    console.log("Url", url);
    let params = new HttpParams();
    params = params.set("page", pagina.p! - 1);
    params = params.set("perPage", pagina.ipp!);
    return this.httpClient.get<Filme[]>(url, { params }).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(5000),
      map((obj) => obj),
      take(1)
    );
  }

  length(id: any): Observable<any> {
    const url = `${this.urlBase}/length/${id}`;
    console.log("Url", url);
    return this.httpClient.get<any>(url).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(5000),
      map((obj) => obj),
      take(1)
    );
  }

  findbytitulo(filter: any): Observable<Filme[]> {
    const url = `${this.urlBase}/findbytitulo`;
    let params = new HttpParams();
    params = params.set("filter", filter);
    return this.httpClient.get<Filme[]>(url, { params }).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      map((obj) => obj),
      take(1)
    );
  }

  findbycritica(body: any): Observable<Filme[]> {
    const url = `${this.urlBase}/findbycritica`;
    return this.httpClient.post<Filme[]>(url, body).pipe(
      catchError((error) => {
        return of([]);
      }),
      first(),
      // delay(200),
      map((obj) => obj),
      take(1)
    );
  }

  findbyatores(id: any): Observable<Filme[]> {
    const url = `${this.urlBase}/findbyatores/${id}`;
    return this.httpClient.get<Filme[]>(url).pipe(
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
