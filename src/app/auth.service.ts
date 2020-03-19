import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getID() {
    return JSON.parse(localStorage.getItem('userId'));
  }

  loggedOut() {
    return localStorage.removeItem('token');
    // this.router.navigate(['/home']);
  }
}
