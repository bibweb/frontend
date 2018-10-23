import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "@app/model/book";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  @Input()
  books: Book[];

  @Output('book')
  bookEmitter = new EventEmitter<Book>()

  selectBook(book: Book) {
    this.bookEmitter.emit(book);
  }

}
