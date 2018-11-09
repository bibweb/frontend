import {Component, OnInit} from '@angular/core';
import {AuthService, Checkout, CheckoutService} from '@app/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '@app/views/books/model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  private userId: number;
  checkouts: Checkout[];

  constructor(private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private checkoutService: CheckoutService) {
  }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.authService.hasRole('ADMIN')) {
      if (this.activatedRoute.snapshot.queryParamMap.has('user')) {
        this.userId = +this.activatedRoute.snapshot.queryParamMap.get('user');
      }
    }
    this.loadCheckouts();
  }

  public getUserId(): number {
    return this.userId;
  }

  loadCheckouts(): void {
    this.checkoutService.getCheckoutsForUser(this.userId).subscribe(checkouts => {
        this.checkouts = checkouts;
      }
    );
  }

  createNewCheckout(bookId) {
    this.checkoutService.checkoutBook(bookId, this.userId).subscribe(value => this.loadCheckouts());
  }
}
