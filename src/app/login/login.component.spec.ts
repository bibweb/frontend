import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '@app/service/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';


describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let authService;
  let router;
  let activatedRoute;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['login', 'setSession', 'isLoggedIn']);
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };
    activatedRoute = {
      queryParams: {'returnUrl': ''}
    };

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: AuthService, useValue: authService},
        {provide: Router, useValue: router},
        {provide: ActivatedRoute, useValue: activatedRoute}
      ],
      declarations: [
        LoginComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a property returnUrl defaults to books', () => {
    authService.isLoggedIn.and.returnValue(false);
    fixture.detectChanges();
    expect(component.returnUrl).toBe('/books');
  });

  it('should redirect loggedIn user to /books', () => {
    authService.isLoggedIn.and.returnValue(true);
    fixture.detectChanges();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/books');
  });

  it('empty form should not be valid', () => {
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should navigate to returnUrl after successful login', async(() => {
    authService.login.and.returnValue(of({'token': 'tset_token', 'expiresIn': 18318239183}));

    const usernameInput = component.loginForm.controls['username'];
    const passwordInput = component.loginForm.controls['password'];

    usernameInput.setValue('test');
    passwordInput.setValue('test');
    fixture.detectChanges();

    expect(component.loginForm.valid).toBeTruthy();
    component.login();
    expect(authService.setSession).toHaveBeenCalledWith('tset_token', 18318239183);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/books');
  }));

});
