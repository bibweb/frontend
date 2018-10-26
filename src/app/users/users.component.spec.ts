import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {UserService} from '@app/service/user.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj('UserService', ['getUsers']);
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent
      ],
      providers: [
        {provide: UserService, useValue: userService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
