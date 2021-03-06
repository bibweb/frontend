import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Book, BookAvailabilityState} from '../model';
import {BookService} from '../services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})


export class BooksComponent implements OnInit {

  books: Book[];
  private filters: BookAvailabilityState[];

  bookAvailabilityState = BookAvailabilityState; // used in template

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
    this.getBooks();
    this.filters = [BookAvailabilityState.AVAILABLE, BookAvailabilityState.CHECKEDOUT_BY_YOU];
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  private toggleAvailabilityState(state: BookAvailabilityState) {
    if (this.filters.includes(state)) {
      delete this.filters[this.filters.indexOf(state)];
    } else {
      this.filters.push(state);
    }

    this.getBooks();
  }

  toggleShowAvailableBooks() {
    this.toggleAvailabilityState(BookAvailabilityState.AVAILABLE);
  }

  toggleShowReservedBooks() {
    this.toggleAvailabilityState(BookAvailabilityState.CHECKEDOUT_BY_YOU);
  }

  toggleShowUnavailableBooks() {
    this.toggleAvailabilityState(BookAvailabilityState.UNAVAILABLE);
  }

  toggleAll() {
    if (this.filters.includes(BookAvailabilityState.AVAILABLE) &&
      this.filters.includes(BookAvailabilityState.CHECKEDOUT_BY_YOU) &&
      this.filters.includes(BookAvailabilityState.UNAVAILABLE)) {
      this.filters = [];
    } else {
      this.filters = [BookAvailabilityState.CHECKEDOUT_BY_YOU, BookAvailabilityState.AVAILABLE, BookAvailabilityState.UNAVAILABLE];
    }
  }

  setFilters(states: BookAvailabilityState[]): void {
    this.filters = states;
  }

  getFilters(): BookAvailabilityState[] {
    return this.filters;
  }
}
