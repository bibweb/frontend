import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService,
			  private router: Router) {
    this.authService = authService;
  }

  canActivate() {
	if(this.authService.isLoggedIn()) {
		return true;
	}
    
	this.router.navigateByUrl('/login');
	return false;
  }
}
