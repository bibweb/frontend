import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '@env/environment';
import {Book} from '@app/views/books/model';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class CheckoutService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  checkoutBook(book: Book): Observable<any> {
    return this.http.put(`${environment.bibwebApiUrl}/users/${this.authService.getUserId()}/checkouts/books/${book.id}`, httpOptions);
  }

  returnBook(book: Book): Observable<any> {
    return this.http.delete(`${environment.bibwebApiUrl}/users/${this.authService.getUserId()}/checkouts/books/${book.id}`, httpOptions);
  }
}
