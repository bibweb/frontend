import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {AuthService} from './service/auth.service';

import {AuthService} from './service/auth.service';
import {UserRole, UserRolesStrings} from './model/userRoles';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
	if(!this.auth.isLoggedIn()) {
		redirectToLogin();
		return false;
	}
	
    const expectedRole = route.data.expectedRole;
    if (!this.auth.hasRole(UserRolesStrings.get(expectedRole))) {
	  // possibly redirect to authentication error page
      return false;
    }
    return true;
  }
  
  redirectToLogin() : void {
	  
  }

}