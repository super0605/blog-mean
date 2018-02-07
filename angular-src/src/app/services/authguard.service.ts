import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: String) {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'], {queryParams: { url: url }});
      return false;
    }
  }
}
