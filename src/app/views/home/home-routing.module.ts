import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForbiddenPageAccessComponent} from '../home/forbidden-page-access';
import {LoginComponent} from '@app/views/home/login';
import {SignUpComponent} from '@app/views/home/sign-up';

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenPageAccessComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
