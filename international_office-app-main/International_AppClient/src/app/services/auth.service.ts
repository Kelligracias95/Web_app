import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sendNotification(email: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = environment.API;

  constructor(private http: HttpClient) {}

 

  

  register(user: { username: string; email: string; password: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/local/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/local`, credentials)
     
  }
  


}