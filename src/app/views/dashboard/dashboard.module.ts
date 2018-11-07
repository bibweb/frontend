import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared';
import {OverviewComponent} from '@app/views/dashboard/overview';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { CheckoutsListComponent } from './checkouts-list/checkouts-list.component';
import { CreateCheckoutComponent } from './create-checkout/create-checkout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookIdValidator} from '@app/views/dashboard/create-checkout/validators/BookIdValidator';

@NgModule({
  declarations: [
    OverviewComponent,
    CheckoutsListComponent,
    CreateCheckoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    BookIdValidator
  ]
})
export class DashboardModule {
}
