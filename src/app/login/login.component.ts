import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  failedLoginAttempts: number;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/books');
    }

    this.returnUrl = this.route.queryParams['returnUrl'] || '/books';
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe(
        (data) => {
          if (data) {
            this.authService.setSession(data['token'], data['expiresIn']);
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.failedLoginAttempts = this.authService.getFailedLoginAttempts();
          }
        }
      );
  }

}
