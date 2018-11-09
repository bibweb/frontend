import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Book, BookAvailabilityState} from '../model';
import {BookService} from '../services';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html'
})
export class BooksListComponent {

  private bookAvailabilityState = BookAvailabilityState; // used in template

  constructor(private bookService: BookService,
              private router: Router) {
  }

  @Input()
  books: Book[];

  selectBook(book: Book) {
    this.router.navigateByUrl('/books/' + book.id);
  }

  updateBook(book: Book) {
      this.books[this.books.findIndex(x => x.id === book.id)] = book;
  }

}
