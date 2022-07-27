import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Type } from '../interfaces/type';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class TypesService {

  private typesUrl = 'http://localhost:3200/api/types';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  /** GET files from the server */
  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typesUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<Type[]>('getTypes', []))
      );
  }

  /** GET file by id. Return `undefined` when id not found */
  getTypeNo404<Data>(id: number): Observable<Type> {
    const url = `${this.typesUrl}/?id=${id}`;
    return this.http.get<Type[]>(url, this.httpOptions)
      .pipe(
        map(types => types[0]), // returns a {0|1} element array
        catchError(this.handleError<Type>(`getType id=${id}`))
      );
  }

  /** GET file by id. Will 404 if id not found */
  getType(id: number): Observable<Type> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Type>(url, this.httpOptions).pipe(
      catchError(this.handleError<Type>(`getType id=${id}`))
    );
  }

  /* GET filees whose name contains search term */
  searchTypes(term: string): Observable<Type[]> {
    if (!term.trim()) {
      // if not search term, return empty file array.
      return of([]);
    }
    return this.http.get<Type[]>(`${this.typesUrl}/?name=${term}`, this.httpOptions).pipe(
      catchError(this.handleError<Type[]>('searchTypes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new file to the server */
  addType(file: Type): Observable<Type> {
    return this.http.post<Type>(this.typesUrl, file, this.httpOptions).pipe(
      catchError(this.handleError<Type>('addType'))
    );
  }

  /** DELETE: delete the file from the server */
  deleteType(id: number): Observable<Type> {
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<Type>(url, this.httpOptions).pipe(
      catchError(this.handleError<Type>('deleteType'))
    );
  }

  /** PUT: update the file on the server */
  updateType(file: Type): Observable<any> {
    return this.http.put(`${this.typesUrl}/${file.id}`, file, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateType'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(operation + error.message); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
