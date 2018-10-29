import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Book} from '../model/book';

import {environment} from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class BookService {

  private booksUrl = environment.bibwebApiUrl + '/books';

  constructor(
    private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl, httpOptions);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + '/' + id, httpOptions);
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(this.booksUrl + '/' + book.id, book, httpOptions);
  }

  checkoutBook(book: Book): Observable<any> {
    return this.http.put(this.booksUrl + '/' + book.id + '/checkouts', httpOptions);
  }

  returnBook(book: Book): Observable<any> {
    return this.http.delete(this.booksUrl + '/' + book.id + '/checkouts', httpOptions);
  }
}
