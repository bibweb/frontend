import {Component, OnInit} from '@angular/core';
import {User} from '@app/model/User';
import {UserService} from '@app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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
