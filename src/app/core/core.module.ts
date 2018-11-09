import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AuthGuard, RoleGuard} from './guards';
import {AuthTokenHttpInterceptor} from './interceptors';
import {AuthService, CheckoutService, ReservationService} from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenHttpInterceptor, multi: true},
    AuthGuard,
    RoleGuard,
    AuthService,
    CheckoutService,
    ReservationService
  ],
  exports: [
  ]
})
export class CoreModule { }
