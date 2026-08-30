import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  connected = false;
  private currentUser: any = null;

  constructor(private router: Router) {}

  setConnected(status: boolean): void {
    this.connected = status;
  }

  isConnected(): boolean {
    return this.connected;
  }

  setCurrentUser(user: any): void {
    this.currentUser = user;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
    this.connected = false;
    this.router.navigate(['/login']);
  }
}
