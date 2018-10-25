import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '@app/model/book';
import {BookAvailabilityState} from '@app/model/bookAvailabilityState';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  private bookAvailabilityState = BookAvailabilityState; // used in template

  @Input()
  books: Book[];

  @Output()
  book = new EventEmitter<Book>();

  selectBook(book: Book) {
    this.book.emit(book);
  }

}
