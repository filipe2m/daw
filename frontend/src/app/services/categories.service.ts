import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../interfaces/category';

import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: 'root' })
export class CategoriesService {

  private categoriesUrl = 'http://localhost:3200/api/categories';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Category': 'application/json',
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  /** GET filees from the server */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<Category[]>('getCategories', []))
      );
  }

  /** GET file by id. Return `undefined` when id not found */
  getCategoryNo404<Data>(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/?id=${id}`;
    return this.http.get<Category[]>(url, this.httpOptions)
      .pipe(
        map(categories => categories[0]), // returns a {0|1} element array
        catchError(this.handleError<Category>(`getCategory id=${id}`))
      );
  }

  /** GET file by id. Will 404 if id not found */
  getCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url, this.httpOptions).pipe(
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  /* GET filees whose name contains search term */
  searchCategories(term: string): Observable<Category[]> {
    if (!term.trim()) {
      // if not search term, return empty file array.
      return of([]);
    }
    return this.http.get<Category[]>(`${this.categoriesUrl}/?name=${term}`, this.httpOptions).pipe(
      catchError(this.handleError<Category[]>('searchCategories', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new file to the server */
  addCategory(file: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, file, this.httpOptions).pipe(
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  /** DELETE: delete the file from the server */
  deleteCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;

    return this.http.delete<Category>(url, this.httpOptions).pipe(
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  /** PUT: update the file on the server */
  updateCategory(file: Category): Observable<any> {
    return this.http.put(`${this.categoriesUrl}/${file.id}`, file, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCategory'))
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
