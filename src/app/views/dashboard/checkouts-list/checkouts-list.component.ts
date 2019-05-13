import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Checkout} from '@app/core';

@Component({
  selector: 'app-checkouts-list',
  templateUrl: './checkouts-list.component.html'
})
export class CheckoutsListComponent implements OnInit {

  constructor() {
  }

  selectedCheckoutId: number[] = [];

  @Input()
  checkouts: Checkout[];

  @Output()
  changeSelected = new EventEmitter<any>();

  ngOnInit() {
  }

  clickCheckout(checkoutId) {
    if(this.selectedCheckoutId.includes(checkoutId)) {
      this.selectedCheckoutId = this.selectedCheckoutId.filter(id => id != checkoutId);
    } else {
      this.selectedCheckoutId.push(checkoutId);
    }
    this.changeSelected.emit(this.selectedCheckoutId);
  }

}
