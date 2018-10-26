import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupService} from '@app/service/signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
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
