import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    protected router: Router,
    private userDataService: UserDataService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authData = this.userDataService.getAuthUserData();
    if (authData) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
