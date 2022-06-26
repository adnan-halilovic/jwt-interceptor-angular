import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getToken() {
    return localStorage.getItem('token');
  }
  setToken() {
    return localStorage.setItem('token', 'Our test JWT token');
  }
  removeToken() {
    return localStorage.removeItem('token');
  }
}
