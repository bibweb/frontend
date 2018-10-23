import {Component, OnInit} from '@angular/core';

import {Book} from '../model/book';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  selectBook(book: Book) {
    this.router.navigateByUrl('/books/' + book.id);
  }

}
