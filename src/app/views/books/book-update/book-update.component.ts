import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Book} from '../model/book';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html'
})
export class BookUpdateComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  updateBook(): void {
    this.bookService.updateBook(this.book).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
