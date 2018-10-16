import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor(private authService: AuthService,
	          private router: Router) { }

  ngOnInit() {
  }
  
  isLoggedIn() {
	return this.authService.isLoggedIn();
  }
  
  logout() {
	this.authService.logout();
	this.router.navigateByUrl('login'); 
  }
  
  login() {
	this.router.navigateByUrl('login');   
  }

}
