import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CheckoutService} from '@app/core';
import {Book} from '@app/views/books/model';
import {BookService} from '@app/views/books/services';
import {BookIdValidator} from '@app/views/dashboard/create-checkout/validators/BookIdValidator';
import {Checkout} from '@app/views/dashboard/model';

@Component({
  selector: 'app-create-checkout',
  templateUrl: './create-checkout.component.html',
  styleUrls: ['./create-checkout.component.css']
})
export class CreateCheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  bookIds: number[];

  constructor(private fb: FormBuilder,
              private checkoutService: CheckoutService,
              private bookService: BookService,
              private bookIdValidator: BookIdValidator) {
    this.checkoutForm = this.fb.group({
      'bookId': ['', this.bookIdValidator.checkBookIdIsValid.bind(this.bookIdValidator)]
    });
  }

  @Output()
  create = new EventEmitter<any>();

  ngOnInit() {
    this.loadBookIds();
  }

  loadBookIds() {
    this.bookService.getBookIds().subscribe(bookIds => this.bookIds = bookIds);
  }

  checkout(): void {
    this.create.emit(this.checkoutForm.value['bookId']);
    this.checkoutForm = this.fb.group({
      'bookId': ['', this.bookIdValidator.checkBookIdIsValid.bind(this.bookIdValidator)]
    });
  }
}
