import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {SignupService} from '../services/index';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(_fb: FormBuilder, private signupService: SignupService, private router: Router) {
    this.signUpForm = _fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signUp() {
    this.signupService.signup(this.signUpForm.value)
      .subscribe(() => this.router.navigate(['/login']));
  }
}
