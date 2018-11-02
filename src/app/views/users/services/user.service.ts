import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.bibwebApiUrl;


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl + '/users');
  }
}
