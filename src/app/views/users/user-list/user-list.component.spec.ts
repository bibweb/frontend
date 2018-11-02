import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserListComponent} from './user-list.component';
import {UserService} from '../services/user.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj('UserService', ['getUsers']);
    TestBed.configureTestingModule({
      declarations: [
        UserListComponent
      ],
      providers: [
        {provide: UserService, useValue: userService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
