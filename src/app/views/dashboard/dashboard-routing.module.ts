import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '@app/core';
import {RoleGuard} from '@app/core';
import {UserRoles} from '@app/core';

import {OverviewComponent} from './overview/index';


const routes: Routes = [
  {path: '', canActivate: [AuthGuard, RoleGuard], data: {expectedRole: UserRoles.USER}, component: OverviewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
