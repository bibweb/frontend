import {NavbarMenuComponent} from './navbar-menu.component';
import {AuthService} from '@app/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {HasRoleDirective} from '@app/shared';

describe('navbar-menu', () => {
  let component: NavbarMenuComponent;
  let fixture: ComponentFixture<NavbarMenuComponent>;
  let authService;
  let router;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['isLoggedIn', 'getUserName', 'hasRole']);
    router = {};

    TestBed.configureTestingModule({
      declarations: [NavbarMenuComponent, HasRoleDirective],
      providers: [
        {provide: AuthService, useValue: authService},
        {provide: Router, useValue: router}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMenuComponent);
    component = fixture.componentInstance;
  });

  it('should have a Component', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the name of the user if loggedIn === false', () => {
    authService.isLoggedIn.and.returnValue(false);
    fixture.detectChanges();
    const spanUserName = fixture.nativeElement.querySelector('span#username');
    expect(spanUserName).toBeNull();
  });

  it('should have a property with the name of the loggedIn user', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.getUserName.and.returnValue('test');

    fixture.detectChanges();
    expect(component.loggedInUserName).toBe('test');
  });

  it('should show the name of the loggedIn user', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.getUserName.and.returnValue('test');

    fixture.detectChanges();
    const spanUserName = fixture.nativeElement.querySelector('span#username');
    expect(spanUserName.innerText).toBe('test');
  });

});
