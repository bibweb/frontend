import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';

import {AuthService} from '../services';
import {UserRolesStrings} from '../model';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isLoggedIn()) {
      return false;
    }

    const expectedRole = route.data.expectedRole;
    if (!this.auth.hasRole(UserRolesStrings.get(expectedRole))) {
      this.router.navigateByUrl('forbidden');
    }
    return true;
  }

}
