import {Component, Input} from '@angular/core';
import {Book} from '../model/book';
import {BookAvailabilityState} from '../model';
import {BookService} from '../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
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
