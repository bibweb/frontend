import {BooksListComponent} from '@app/books-list/books-list.component';
import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import {Book} from '@app/model/book';

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

  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BooksListComponent, TestHostComponent]
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

  it('should register click on book', fakeAsync(() => {
    spyOn(testHostComponent, 'selectBook');

    const book1: Book = new Book();
    book1.id = 1;
    book1.title = 'Book 1';

    testHostComponent.booksListComponent.books = [book1];

    fixture.detectChanges();

    const row = fixture.nativeElement.querySelector('tbody > tr');
    row.click();

    fixture.whenStable().then(() => {
      expect(testHostComponent.selectBook).toHaveBeenCalled();
    });

  }));
});
