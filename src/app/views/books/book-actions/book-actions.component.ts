import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Book, BookAvailabilityState} from '../model';
import {BookService} from '../services';
import {CheckoutService} from '@app/core';

@Component({
  selector: 'app-book-actions',
  templateUrl: './book-actions.component.html'
})
export class BookActionsComponent {

  @Input()
  book: Book;

  @Output()
  update = new EventEmitter<Book>();

  bookAvailabilityState = BookAvailabilityState; // used in template

  constructor(private checkoutService: CheckoutService,
              private bookService: BookService) {
  }

  checkoutBook() {
    this.checkoutService.checkoutBook(this.book.id).subscribe(() => {
      this.bookService.getBook(this.book.id).subscribe(book => {
        this.book = book;
        this.update.emit(book);
      });
    }, error => {
      console.error(error);
    });
  }

  returnBook() {
    this.checkoutService.returnBook(this.book.id).subscribe(() => {
      this.bookService.getBook(this.book.id).subscribe(book => {
        this.book = book;
        this.update.emit(book);
      });
    }, error => {
      console.error(error);
    });
  }

}
