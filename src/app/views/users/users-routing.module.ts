import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '@app/core';
import {RoleGuard} from '@app/core';
import {UserRoles} from '@app/core';

import {UserListComponent} from './user-list/index';


const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard, RoleGuard], data: {expectedRole: UserRoles.ADMIN}, component: UserListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {
}
