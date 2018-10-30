import {BookService} from './book.service';
import {Book} from '../model/book';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BookAvailabilityState} from '@app/model/bookAvailabilityState';


describe('BookService', () => {
  let service: BookService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BookService
      ]
    });

    service = TestBed.get(BookService);
    backend = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    backend.verify();
  });

  it('should return the book with id 1', () => {
    const book: Book = {
      id: 1,
      isbn: '5135133135',
      title: 'Book Title',
      availability: BookAvailabilityState.AVAILABLE,
      releaseYear: 1993,
      numberOfPages: 254,
      bookType: "THRILLER"
    };

    service.getBook(1).subscribe((data: Book) => {
      expect(data).toEqual(book);
    });

    const req = backend.expectOne(request => {
      return request.url.includes('/books/1');
    });
    expect(req.request.method).toBe('GET');

    req.flush(book);
  });

});
