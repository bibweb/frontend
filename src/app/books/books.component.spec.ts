import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {BooksComponent} from '@app/books/books.component';
import {BookService} from '@app/service/book.service';
import {of} from 'rxjs';
import {BookRequest} from '@app/model/bookRequest';
import {BookAvailabilityState} from '@app/model/bookAvailabilityState';

describe('BooksComponent', () => {
  let fixture: ComponentFixture<BooksComponent>;
  let component: BooksComponent;

  let service;
  let router;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('BookService', ['getBooks']);

    service.getBooks.and.returnValue(of(<BookRequest[]>[
      {}
    ]));

    router = {
      navigate: jasmine.createSpy('navigateByUrl')
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: BookService, useValue: service},
        {provide: Router, useValue: router}
      ],
      declarations: [
        BooksComponent
      ]
    });

    fixture = TestBed.overrideComponent(BooksComponent, {
      set: {
        template: ''
      }})
      .createComponent(BooksComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set filters correctly', () => {
    let filters = [BookAvailabilityState.RESERVED_BY_YOU];
    component.setFilters(filters);
    expect(component.getFilters()).toBe(filters);

    filters = [BookAvailabilityState.RESERVED_BY_YOU, BookAvailabilityState.UNAVAILABLE];
    component.setFilters(filters);
    expect(component.getFilters()).toBe(filters);
  });

  it('should toggle a filter correctly, if filter is activated', () => {
    const filters = [];
    component.setFilters(filters);
    expect(component.getFilters().includes(BookAvailabilityState.RESERVED_BY_YOU)).toBe(false);
    component.toggleShowReservedBooks();
    expect(component.getFilters().includes(BookAvailabilityState.RESERVED_BY_YOU)).toBe(true);
    component.toggleShowReservedBooks();
    expect(component.getFilters().includes(BookAvailabilityState.RESERVED_BY_YOU)).toBe(false);
  });

  it('should be able to toggle all filters correctly', () => {
    const filters = [];
    component.setFilters(filters);
    expect(component.getFilters().length).toBe(0);
    component.toggleAll();
    expect(component.getFilters().length).toBe(3);
    component.toggleAll();
    expect(component.getFilters().length).toBe(0);
  });

});
