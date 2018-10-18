import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  userName: String;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.userName = '';
  }

  isLoggedIn() {
    const loggedIn: boolean = this.authService.isLoggedIn();
    if (loggedIn) {
      this.userName = this.authService.getUserName();
    } else {
      this.userName = '';
    }
    return loggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  login() {
    this.router.navigateByUrl('login');
  }

}
