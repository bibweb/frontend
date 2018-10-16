import {Injectable} from '@angular/core';


import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {BookRequest} from '../model/bookRequest';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookrequestService {

  private bookRequestsURL = environment.bibwebApiUrl + '/bookrequest';

  constructor(private http: HttpClient) {
  }

  getBookRequests(): Observable<BookRequest[]> {
    return this.http.get<BookRequest[]>(this.bookRequestsURL);
  }

  getBookRequest(bookRequestId: number): Observable<BookRequest> {
    return this.http.get<BookRequest>(this.bookRequestsURL + '/' + bookRequestId);
  }

  createBookRequest(bookRequest: BookRequest): Observable<any> {
    return this.http.post(this.bookRequestsURL, bookRequest);
  }
}

