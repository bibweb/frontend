import {Book} from '../model/book';
import {BookListSearchPipe} from 'app/views/books/pipes/book-list-search.pipe';

describe('books-list-filter', () => {

  let pipe: BookListSearchPipe;
  let books: Book[];
  let book1: Book;
  let book2: Book;
  let book3: Book;

  beforeEach(function () {
    pipe = new BookListSearchPipe();

    book1 = new Book();
    book2 = new Book();
    book3 = new Book();

    book1.title = 'This is a long book';
    book2.title = 'A rather short book';
    book3.title = 'Another very long book';

    books = [book1, book2, book3];
  });

  it('should filter results based on search string', () => {
    expect(pipe.transform(books, 'long').length).toBe(2);
    expect(pipe.transform(books, 'long')[0]).toBe(book1);
    expect(pipe.transform(books, 'long')[1]).toBe(book3);
  });

  it('should return empty list if no book matches the search string', () => {
    expect(pipe.transform(books, 'magazine').length).toBe(0);
  });

  it('should return all books if search string is empty', () => {
    expect(pipe.transform(books, '').length).toBe(3);
  });

});
