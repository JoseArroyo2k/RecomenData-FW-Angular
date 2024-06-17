import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    console.log('AuthService: sending login request', { Usuario: username, Contrasena: password });
    return this.http.post(`${this.apiUrl}/login`, { Usuario: username, Contrasena: password });
  }
}
