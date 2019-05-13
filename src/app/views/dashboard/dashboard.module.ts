import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared';
import {OverviewComponent} from '@app/views/dashboard/overview';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CheckoutsListComponent} from './checkouts-list/checkouts-list.component';
import {CreateCheckoutComponent} from './create-checkout/create-checkout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookIdValidator} from '@app/views/dashboard/create-checkout/validators/BookIdValidator';
import {BooksModule} from '@app/views/books/books.module';
import {ReservationsListComponent} from '@app/views/dashboard/reservations-list/reservations-list.component';
import {CheckoutActionsComponent} from '@app/views/dashboard/checkout-actions/checkout-actions.component';

@NgModule({
  declarations: [
    OverviewComponent,
    CheckoutsListComponent,
    CreateCheckoutComponent,
    ReservationsListComponent,
    CheckoutActionsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BooksModule
  ],
  providers: [
    BookIdValidator
  ]
})
export class DashboardModule {
}
