import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Receita } from './receita.model';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  constructor(private http: HttpClient) {}
  head: HttpHeaders = new HttpHeaders();

  getAll(): Observable<Receita[]> {
    this.head.append('Access-Control-Allow-Origin', '*');
    
    return this.http
      .get<Receita[]>(`${environment.baseURL}/receitas`, {
        headers: this.head,
      })
      .pipe(
        map((receita: Receita[]) => receita),
        retry(3),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
