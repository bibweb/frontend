import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserListComponent} from './user-list/index';
import {UsersRoutingModule} from '@app/views/users/users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UserListComponent
  ]
})
export class UsersModule { }
