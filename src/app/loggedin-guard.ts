import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  canActivate() {
    return this.authService.isLoggedIn();
  }
}
