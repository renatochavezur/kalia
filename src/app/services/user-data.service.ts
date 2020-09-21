import {Injectable, Injector} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() {}

  getAuthUserData() {
    const authData = localStorage.getItem('auth');
    let authUserData = null;
    if (authData !== null && authData !== undefined) {
      authUserData = JSON.parse(authData);
    }
    return authUserData;
  }

  setAuthUserData(authData) {
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  deleteAuthData() {
    localStorage.removeItem('auth');
  }
}
