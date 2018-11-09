import {Component, Input, OnInit} from '@angular/core';
import {Checkout} from '@app/core';

@Component({
  selector: 'app-checkouts-list',
  templateUrl: './checkouts-list.component.html'
})
export class CheckoutsListComponent implements OnInit {

  constructor() {
  }

  @Input()
  checkouts: Checkout[];

  ngOnInit() {
  }

}
