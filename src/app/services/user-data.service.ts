import {Injectable, Injector} from '@angular/core';
import {isNull, isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() {}

  getAuthUserData() {
    const authData = localStorage.getItem('auth');
    let authUserData = null;
    if (!isNull(authData) && !isUndefined(authData)) {
      authUserData = JSON.parse(authData);
    }
    return authUserData;
  }

  setAuthUserData(authData) {
    localStorage.setItem('auth', JSON.stringify(authData));
  }
}
