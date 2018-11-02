import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '@app/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  loggedIn: boolean;
  loggedInUserName: String;

  constructor(private authService: AuthService,
              private router: Router) {
    this.loggedInUserName = '';
    this.loggedIn = false;
  }

  ngOnInit() {
    this.isLoggedIn();
  }

  isLoggedIn() {
    this.loggedIn = this.authService.isLoggedIn();
    this.updateUserName();
    return this.loggedIn;
  }

  private updateUserName() {
    if (this.loggedIn) {
      this.loggedInUserName = this.authService.getUserName();
    } else {
      this.loggedInUserName = '';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  login() {
    this.router.navigateByUrl('login');
  }

}
