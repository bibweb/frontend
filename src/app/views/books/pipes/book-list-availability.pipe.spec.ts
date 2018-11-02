import {Book} from '../model/book';
import {BookListAvailabilityPipe} from 'app/views/books/pipes/book-list-availability.pipe';
import {BookAvailabilityState} from '../model';

describe('books-list-availability-pipe', () => {

  let pipe: BookListAvailabilityPipe;
  let books: Book[];
  let book1: Book;
  let book2: Book;
  let book3: Book;
  let book4: Book;

  beforeEach(function () {
    pipe = new BookListAvailabilityPipe();

    book1 = new Book();
    book2 = new Book();
    book3 = new Book();
    book4 = new Book();

    book1.title = 'This is a long book';
    book1.availability = BookAvailabilityState.AVAILABLE;
    book2.title = 'A rather short book';
    book2.availability = BookAvailabilityState.CHECKEDOUT_BY_YOU;
    book3.title = 'Another very long book';
    book3.availability = BookAvailabilityState.UNAVAILABLE;
    book4.title = 'Another reserved book';
    book4.availability = BookAvailabilityState.CHECKEDOUT_BY_YOU;

    books = [book1, book2, book3, book4];
  });

  it('should return books which are unavailable', () => {
    expect(pipe.transform(books, [BookAvailabilityState.UNAVAILABLE]).length).toBe(1);
    expect(pipe.transform(books, [BookAvailabilityState.UNAVAILABLE])[0]).toBe(book3);
  });

  it('should return books which are available', () => {
    expect(pipe.transform(books, [BookAvailabilityState.AVAILABLE]).length).toBe(1);
    expect(pipe.transform(books, [BookAvailabilityState.AVAILABLE])[0]).toBe(book1);
  });

  it('should return books which are reserved by user', () => {
    expect(pipe.transform(books, [BookAvailabilityState.CHECKEDOUT_BY_YOU]).length).toBe(2);
    expect(pipe.transform(books, [BookAvailabilityState.CHECKEDOUT_BY_YOU])[0]).toBe(book2);
    expect(pipe.transform(books, [BookAvailabilityState.CHECKEDOUT_BY_YOU])[1]).toBe(book4);
  });

  it('should return books which are unavailable or available', () => {
    expect(pipe.transform(books, [BookAvailabilityState.AVAILABLE, BookAvailabilityState.UNAVAILABLE]).length).toBe(2);
    expect(pipe.transform(books, [BookAvailabilityState.AVAILABLE, BookAvailabilityState.UNAVAILABLE])[0]).toBe(book1);
    expect(pipe.transform(books, [BookAvailabilityState.AVAILABLE, BookAvailabilityState.UNAVAILABLE])[1]).toBe(book3);
  });

});
