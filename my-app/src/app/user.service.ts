import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private signUpUrl = 'http://localhost:8081/api/users/sign-up';
  private loginUrl = 'http://localhost:8081/api/users/login';
  private contactUrl = 'http://localhost:8081/api/contacts'; 

  constructor(private http: HttpClient, private authService: AuthService) {}

  signUp(user: any): Observable<any> {
    return this.http.post(this.signUpUrl, user);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  handleLoginResponse(response: any): void {
    const user = response.user;
    this.authService.setCurrentUser(user); 
    this.authService.setConnected(true);  
  }

  sendContactForm(contact: any): Observable<any> {
    return this.http.post(this.contactUrl, contact); 
  }
}
