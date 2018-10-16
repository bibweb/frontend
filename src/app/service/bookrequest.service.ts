import {Injectable} from '@angular/core';


import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {BookRequest, BookRequestState} from '../model/bookRequest';
import {HttpClient} from '@angular/common/http';

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

  acceptBookRequest(bookRequest: BookRequest): Observable<any>  {
    bookRequest.state = BookRequestState.ACCEPTED;
    return this.http.put(this.bookRequestsURL + '/' + bookRequest.id, bookRequest);
  }

  declineBookRequest(bookRequest: BookRequest): Observable<any> {
    bookRequest.state = BookRequestState.DECLINED;
    return this.http.put(this.bookRequestsURL + '/' + bookRequest.id, bookRequest);
  }
}

