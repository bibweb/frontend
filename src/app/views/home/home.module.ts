import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '@app/shared';

import {HomeRoutingModule} from './home-routing.module';
import {ForbiddenPageAccessComponent} from './forbidden-page-access';
import {MessagesComponent} from './messages';
import {SignUpComponent} from './sign-up';
import {LoginComponent} from './login';
import {NavbarMenuComponent} from './navbar-menu';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ForbiddenPageAccessComponent,
    MessagesComponent,
    SignUpComponent,
    LoginComponent,
    NavbarMenuComponent,
  ],
  exports: [
    NavbarMenuComponent,
    MessagesComponent
  ]
})
export class HomeModule { }
