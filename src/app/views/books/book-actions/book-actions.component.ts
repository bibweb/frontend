import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Book, BookAvailabilityState, BookReservationState} from '../model';
import {BookService} from '../services';
import {ReservationService} from '@app/core';

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
  bookReservationState = BookReservationState; // used in template

  constructor(private reservationService: ReservationService,
              private bookService: BookService) {
  }

  reserveBook() {
    this.reservationService.reserveBook(this.book.id).subscribe(() => {
      this.bookService.getBook(this.book.id).subscribe(book => {
        this.book = book;
        this.update.emit(book);
      });
    }, error => {
      console.error(error);
    });
  }

  removeReservation() {
    this.reservationService.removeReservation(this.book.id).subscribe(() => {
      this.bookService.getBook(this.book.id).subscribe(book => {
        this.book = book;
        this.update.emit(book);
      });
    }, error => {
      console.error(error);
    });
  }

}
