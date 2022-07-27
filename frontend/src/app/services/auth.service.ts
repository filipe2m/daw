import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'http://localhost:3200/api/user';

  constructor(
    private http: HttpClient
  ) { }

  signin(email: string, password: string): Observable<User>{
    return this.http.post<User>(`${this.usersUrl}/signin`, {email, password});
  }

  signout(): void {
    localStorage.removeItem('user');
  }

  isLogged(): any {
    return !!localStorage.getItem('user');
  }
}
