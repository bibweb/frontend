import {Book} from '@app/model/book';
import {BookListAvailabilityPipe} from '@app/books/book-list-availability.pipe';
import {BookAvailabilityState} from '@app/model/bookAvailabilityState';

describe('books-list-availability-pipe', () => {

  let pipe: BookListAvailabilityPipe;
  let books: Book[];
  let book1: Book;
  let book2: Book;
  let book3: Book;

  beforeEach(function () {
    pipe = new BookListAvailabilityPipe();

    book1 = new Book();
    book2 = new Book();
    book3 = new Book();

    book1.title = 'This is a long book';
    book1.availability = BookAvailabilityState.AVAILABLE;
    book2.title = 'A rather short book';
    book2.availability = BookAvailabilityState.RESERVED_BY_YOU;
    book3.title = 'Another very long book';
    book3.availability = BookAvailabilityState.UNAVAILABLE;

    books = [book1, book2, book3];
  });

  it('should filter out books which are unavailable', () => {
    expect(pipe.transform(books, BookAvailabilityState.UNAVAILABLE).length).toBe(2);
    expect(pipe.transform(books, BookAvailabilityState.UNAVAILABLE)[0]).toBe(book1);
    expect(pipe.transform(books, BookAvailabilityState.UNAVAILABLE)[1]).toBe(book2);
  });

  it('should filter out books which are available', () => {
    expect(pipe.transform(books, BookAvailabilityState.AVAILABLE).length).toBe(2);
    expect(pipe.transform(books, BookAvailabilityState.AVAILABLE)[0]).toBe(book2);
    expect(pipe.transform(books, BookAvailabilityState.AVAILABLE)[1]).toBe(book3);
  });

  it('should filter out books which are reserved by user', () => {
    expect(pipe.transform(books, BookAvailabilityState.RESERVED_BY_YOU).length).toBe(2);
    expect(pipe.transform(books, BookAvailabilityState.RESERVED_BY_YOU)[0]).toBe(book1);
    expect(pipe.transform(books, BookAvailabilityState.RESERVED_BY_YOU)[1]).toBe(book3);
  });

});
