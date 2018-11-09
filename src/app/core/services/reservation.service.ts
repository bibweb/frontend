import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class ReservationService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  reserveBook(bookId: number, userId?: number): Observable<any> {
    if(!userId) {
      userId = this.authService.getUserId();
    }
    return this.http.put(`${environment.bibwebApiUrl}/users/${userId}/reservations/books/${bookId}`, httpOptions);
  }

  removeReservation(bookId: number, userId?: number): Observable<any> {
    if(!userId) {
      userId = this.authService.getUserId();
    }
    return this.http.delete(`${environment.bibwebApiUrl}/users/${userId}/reservations/books/${bookId}`, httpOptions);
  }
}
