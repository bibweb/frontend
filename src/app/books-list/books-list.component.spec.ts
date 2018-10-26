import {BooksListComponent} from '@app/books-list/books-list.component';
import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {Component, Input, ViewChild} from '@angular/core';
import {Book} from '@app/model/book';
import {RouterTestingModule} from '@angular/router/testing';
import {BookService} from '@app/service/book.service';
import {BookActionsComponent} from '@app/book-actions/book-actions.component';

describe('books-list', () => {
  @Component({
    selector: `app-host-component`,
    template: `
      <app-books-list (book)="selectBook($event)"></app-books-list>`
  })
  class TestHostComponent {
    @ViewChild(BooksListComponent)
    public booksListComponent: BooksListComponent;

    public selectBook(book: Book) {
    }
  }

  @Component({
    selector: `app-book-actions`,
    template: ``
  })
  class MockBookActionComponent {
    @Input()
    private book: Book;
  }

  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let service;

  beforeEach(async () => {
    service = jasmine.createSpyObj('BookService', ['reserveBook', 'removeReservation']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: BookService, useValue: service}
      ],
      declarations: [BooksListComponent, TestHostComponent, MockBookActionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
  });

  it('should have a Component', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should show empty list if no books were passed', () => {
    testHostComponent.booksListComponent.books = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('tbody > tr').length).toBe(0);
  });

  it('should show all books', () => {
    const book1: Book = new Book();
    const book2: Book = new Book();

    book1.id = 1;
    book1.title = 'Book 1';
    book2.id = 2;
    book2.title = 'Book 2';

    testHostComponent.booksListComponent.books = [book1, book2];

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('tbody > tr').length).toBe(2);
  });

});
