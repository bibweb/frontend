import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthGuard, RoleGuard} from './guards';
import {AuthTokenHttpInterceptor} from './interceptors';
import {AuthService} from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenHttpInterceptor, multi: true},
    AuthGuard,
    RoleGuard,
    AuthService
  ],
  exports: [
  ]
})
export class CoreModule { }
