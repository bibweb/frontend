import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupUrl = environment.bibwebApiUrl;

  constructor(private http: HttpClient) { }

  signup(userData: string) {
    return this.http.post(this.signupUrl + '/signup', userData);
  }
}
