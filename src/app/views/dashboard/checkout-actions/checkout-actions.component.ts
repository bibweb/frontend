import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Checkout} from '@app/core';

@Component({
  selector: 'app-checkout-actions',
  templateUrl: './checkout-actions.component.html'
})
export class CheckoutActionsComponent {

  @Input()
  selectedCheckouts: number[];

  constructor() {
  }

}
