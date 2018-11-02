import {BookrequestService} from './bookrequest.service';
import {BookRequest, BookRequestState} from '../model';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('BookrequestService', () => {
  let service: BookrequestService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BookrequestService
      ]
    });

    service = TestBed.get(BookrequestService);
    backend = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    backend.verify();
  });

  it('should return the BookRequest with id 1', () => {
    const bookRequest: BookRequest = {
      id: 1,
      isbn: '5135133135',
      user: 'user',
      state: 0
    };

    service.getBookRequest(1).subscribe((data: BookRequest) => {
      expect(data).toEqual(bookRequest);
    });

    const req = backend.expectOne(request => {
      return request.url.includes('/bookrequest/1');
    });
    expect(req.request.method).toBe('GET');

    req.flush(bookRequest);
  });

  it('should accept the BookRquest', () => {
    const bookRequest: BookRequest = {
      id: 1,
      isbn: '5135133135',
      user: 'user',
      state: BookRequestState.NEW
    };

    service.acceptBookRequest(bookRequest).subscribe(res => {
      expect(res).toBe('');
    });

    const req = backend.expectOne(request => {
      return request.method === 'PUT' && request.url.includes('/bookrequest/1');
    });

    req.flush('', {status: 204, statusText: 'No Content'});
  });

  it('should create a BookRequest', () => {
    const bookRequest: BookRequest = {
      id: 1,
      isbn: '5135133135',
      user: 'user',
      state: 0
    };

    service.createBookRequest(bookRequest).subscribe(data => {
      expect(data).toEqual(bookRequest);
    });

    backend.expectOne(req => {
      return req.method === 'POST' && req.url.includes('/bookrequest');
    }).flush(bookRequest);
  });

});
