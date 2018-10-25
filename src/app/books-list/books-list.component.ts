import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '@app/model/book';
import {BookAvailabilityState} from '@app/model/bookAvailabilityState';
import {BookService} from '@app/service/book.service';
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

  reserveBook(book: Book) {
    this.bookService.reserveBook(book).subscribe(() => {
      this.bookService.getBook(book.id).subscribe(book => {
        this.books.find(x => x.id == book.id).availability = book.availability;
      });
    }, error => {
      console.error(error);
    });
  }

  removeReservation(book: Book) {
    this.bookService.removeReservation(book).subscribe(() => {
      this.bookService.getBook(book.id).subscribe(book => {
        this.books.find(x => x.id == book.id).availability = book.availability;
      });
    }, error => {
      console.error(error);
    });
  }

}
