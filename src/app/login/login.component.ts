import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginUser } from '../model/loginUser';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  model = new LoginUser('','');

  constructor(private location: Location,
			  private authService: AuthService,
			  private router: Router,
			  private route: ActivatedRoute) {
  }

  ngOnInit() {
	this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }
  
  login(): void {
	if(this.model.username && this.model.password) {
		this.authService.login(this.model)
			.subscribe(
				(retVal) => {
					this.authService.setSession(retVal["token"], retVal["expiresIn"]);
					this.router.navigateByUrl(this.returnUrl);
				}
			);
	}
  }

}
