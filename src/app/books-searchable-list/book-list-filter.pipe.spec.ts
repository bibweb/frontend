import {BooksListComponent} from "@app/books-list/books-list.component";
import {ComponentFixture, fakeAsync, TestBed} from "@angular/core/testing";
import {Component, inject, ViewChild} from "@angular/core";
import {Book} from "@app/model/book";
import {BookListFilterPipe} from "@app/books-searchable-list/book-list-filter.pipe";

describe('books-list-filter', () => {

  let pipe: BookListFilterPipe;
  let books: Book[];
  let book1: Book;
  let book2: Book;
  let book3: Book;

  beforeEach(function () {
    pipe = new BookListFilterPipe();

    book1 = new Book();
    book2 = new Book();
    book3 = new Book();

    book1.title = "This is a long book";
    book2.title = "A rather short book";
    book3.title = "Another very long book";

    books = [book1, book2, book3];
  });

  it('should filter results based on search string', () => {


    expect(pipe.transform(books, "long").length).toBe(2);
    expect(pipe.transform(books, "long")[0]).toBe(book1);
    expect(pipe.transform(books, "long")[1]).toBe(book3);
  });

  it('should return empty list if no book matches the search string', () => {
    let book1: Book = new Book();
    let book2: Book = new Book();
    let book3: Book = new Book();

    book1.title = "This is a long book";
    book2.title = "A rather short book";
    book3.title = "Another very long book";

    expect(pipe.transform(books, "magazine").length).toBe(0);
  });

  it('should return all books if search string is empty', () => {
    let book1: Book = new Book();
    let book2: Book = new Book();
    let book3: Book = new Book();

    book1.title = "This is a long book";
    book2.title = "A rather short book";
    book3.title = "Another very long book";

    expect(pipe.transform(books, "").length).toBe(3);
  });

});
