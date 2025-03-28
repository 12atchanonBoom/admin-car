import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;

  login(username: string, password: string): boolean {
    if (username === 'a' && password === '1') {
      this.isLoggedInStatus = true;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }

  logout() {
    this.isLoggedInStatus = false;
  }
}