import {Injectable} from '@angular/core';


import {environment} from '@env/environment';
import {BookRequest} from '../model/bookRequest';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookrequestService {

  private bookRequestsURL = `${environment.bibwebApiUrl}/bookrequest`;

  constructor(private http: HttpClient) {
  }

  getBookRequests() {
    return this.http.get<BookRequest[]>(this.bookRequestsURL);
  }

  getBookRequest(bookRequestId: number) {
    return this.http.get<BookRequest>(`${this.bookRequestsURL}/${bookRequestId}`);
  }

  createBookRequest(bookRequest: BookRequest) {
    return this.http.post<BookRequest>(this.bookRequestsURL, bookRequest);
  }

  acceptBookRequest(bookRequest: BookRequest) {
    return this.http.put(`${this.bookRequestsURL}/${bookRequest.id}/accept`, bookRequest);
  }

  declineBookRequest(bookRequest: BookRequest) {
    return this.http.put(`${this.bookRequestsURL}/${bookRequest.id}/decline`, bookRequest);
  }
}

