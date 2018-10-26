import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '@app/model/book';
import {BookAvailabilityState} from '@app/model/bookAvailabilityState';
import {BookService} from '@app/service/book.service';

@Component({
  selector: 'app-book-actions',
  templateUrl: './book-actions.component.html',
  styleUrls: ['./book-actions.component.css']
})
export class BookActionsComponent {

  @Input()
  book: Book;

  @Output()
  update = new EventEmitter<Book>();

  private bookAvailabilityState = BookAvailabilityState; // used in template

  constructor(private bookService: BookService) {
  }

  reserveBook() {
    this.bookService.reserveBook(this.book).subscribe(() => {
      this.bookService.getBook(this.book.id).subscribe(book => {
        this.book = book;
        this.update.emit(book);
      });
    }, error => {
      console.error(error);
    });
  }

  removeReservation() {
    this.bookService.removeReservation(this.book).subscribe(() => {
      this.bookService.getBook(this.book.id).subscribe(book => {
        this.book = book;
        this.update.emit(book);
      });
    }, error => {
      console.error(error);
    });
  }

}
