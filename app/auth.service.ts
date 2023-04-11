import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/api/login', { username, password });
  }

  logout() {
    localStorage.removeItem('authToken');
    //this.router.navigate(['/login']);
  }

  isLoggedIn() {
    
    return localStorage.getItem('authToken') !== null  && localStorage.getItem('authToken') !== undefined;
  }

  isAuthenticated() {
    const authToken = localStorage.getItem('authToken');
    return !!authToken;
  }
}