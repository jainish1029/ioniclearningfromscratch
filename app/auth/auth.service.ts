import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
   _userisAuthenticated = false;

  get userisAuthenticated() {
    return this._userisAuthenticated;
  }
  constructor() { }

  login() {
    this._userisAuthenticated = true;
  }
  logout() {
    this._userisAuthenticated = false;
  }
}
