import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HasRoleDirective} from '@app/directive/has-role.directive';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {AuthService} from '@app/service/auth.service';

describe('HasRoleDirective', () => {
  let fixture: ComponentFixture<TestHasRoleComponent>;
  let component: TestHasRoleComponent;
  let divEl: DebugElement;
  let authService;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['hasRole']);

    TestBed.configureTestingModule({
      declarations: [
        HasRoleDirective,
        TestHasRoleComponent
      ],
      providers: [
        {provide: AuthService, useValue: authService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHasRoleComponent);
    component = fixture.componentInstance;
  });

  it('should display the element if the user does have the required role', () => {
    authService.hasRole.and.returnValue(true);
    fixture.detectChanges();
    divEl = fixture.debugElement.query(By.css('div'));
    expect(divEl).toBeDefined();
  });

  it('should hide the element if the user does not have the required role', () => {
    authService.hasRole.and.returnValue(false);
    fixture.detectChanges();
    divEl = fixture.debugElement.query(By.css('div'));
    expect(divEl).toBeNull();
  });
});

@Component({
  template: `<div *appHasRole="'ADMIN'"></div>`
})
class TestHasRoleComponent {
}
