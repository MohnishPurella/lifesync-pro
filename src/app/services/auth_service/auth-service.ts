import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private userName = '';

  isLoggedIn() {
    return this.loggedIn;
  }

  getUserName() {
    return this.userName;
  }

  login(name: string) {
    this.loggedIn = true;
    this.userName = name;
  }

  logout() {
    this.loggedIn = false;
    this.userName = '';
  }
}
