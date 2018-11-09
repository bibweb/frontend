import {Component, OnInit} from '@angular/core';
import {User} from '../model';
import {UserService} from '../services';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = <User[]>users;
    });
  }

}
