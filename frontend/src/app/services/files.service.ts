import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { File } from '../interfaces/file';

@Injectable({ providedIn: 'root' })
export class FilesService {

  private filesUrl = 'http://localhost:3200/api/files';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /** GET filees from the server */
  getFiles(): Observable<File[]> {
    return this.http.get<File[]>(this.filesUrl)
      .pipe(
        catchError(this.handleError<File[]>('getFiles', []))
      );
  }

  /** GET file by id. Return `undefined` when id not found */
  getFileNo404<Data>(id: number): Observable<File> {
    const url = `${this.filesUrl}/?id=${id}`;
    return this.http.get<File[]>(url)
      .pipe(
        map(files => files[0]), // returns a {0|1} element array
        catchError(this.handleError<File>(`getFile id=${id}`))
      );
  }

  /** GET file by id. Will 404 if id not found */
  getFile(id: number): Observable<File> {
    const url = `${this.filesUrl}/${id}`;
    return this.http.get<File>(url).pipe(
      catchError(this.handleError<File>(`getFile id=${id}`))
    );
  }

  /* GET filees whose name contains search term */
  searchFiles(term: string): Observable<File[]> {
    if (!term.trim()) {
      // if not search term, return empty file array.
      return of([]);
    }
    return this.http.get<File[]>(`${this.filesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<File[]>('searchFiles', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new file to the server */
  addFile(file: File): Observable<File> {
    return this.http.post<File>(this.filesUrl, file, this.httpOptions).pipe(
      catchError(this.handleError<File>('addFile'))
    );
  }

  /** DELETE: delete the file from the server */
  deleteFile(id: string): Observable<File> {
    const url = `${this.filesUrl}/${id}`;

    return this.http.delete<File>(url, this.httpOptions).pipe(
      catchError(this.handleError<File>('deleteFile'))
    );
  }

  /** PUT: update the file on the server */
  updateFile(file: File): Observable<any> {
    return this.http.put(`${this.filesUrl}/${file.id}`, file, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateFile'))
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
