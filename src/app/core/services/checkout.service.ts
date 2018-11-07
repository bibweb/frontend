import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '@env/environment';
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

  checkoutBook(bookId: number, userId?: number): Observable<any> {
    if(!userId) {
      userId = this.authService.getUserId();
    }
    return this.http.put(`${environment.bibwebApiUrl}/users/${userId}/checkouts/books/${bookId}`, httpOptions);
  }

  returnBook(bookId: number, userId?: number): Observable<any> {
    if(!userId) {
      userId = this.authService.getUserId();
    }
    return this.http.delete(`${environment.bibwebApiUrl}/users/${userId}/checkouts/books/${bookId}`, httpOptions);
  }

  getCheckoutsForUser(userId: number): Observable<any> {
    return this.http.get(`${environment.bibwebApiUrl}/users/${userId}/checkouts`, httpOptions);
  }
}
