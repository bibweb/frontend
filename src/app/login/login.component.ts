import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { LoginUser } from '../loginUser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginUser('','');

  constructor(private location: Location,
			  private authService: AuthService,
			  private router: Router) {
  }

  ngOnInit() {}
  
  login(): void {
	if(this.model.username && this.model.password) {
		this.authService.login(this.model)
			.subscribe(
				(retVal) => {
					this.authService.setSession(retVal["token"], retVal["expiresIn"]);
					this.router.navigateByUrl('books');
				}
			);
	}
  }

}
