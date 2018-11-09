import {Component, Input, OnInit} from '@angular/core';
import {Checkout} from '../model';

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