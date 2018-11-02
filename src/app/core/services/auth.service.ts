import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import * as moment from 'moment';

import {LoginUser} from '@app/views/home/model';

import {environment} from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class AuthService {

  private authUrl = environment.bibwebApiUrl + '/token/generate-token';  // URL to web api
  private failedLoginAttempts: number;

  constructor(private http: HttpClient) {
    this.failedLoginAttempts = 0;
  }

  login(loginUser: LoginUser) {
    return this.http.post(this.authUrl, loginUser, httpOptions).pipe(
      tap(() => {
        console.log(`logged in user ${loginUser.username}`);
        this.failedLoginAttempts = 0;
      }),
      catchError(this.handleError<any>('login'))
    );
  }

  public getFailedLoginAttempts(): number {
    return this.failedLoginAttempts;
  }

  public setSession(token: string, expiresIn: number) {
    const expiresAt = moment().add(expiresIn, 'second');
    localStorage.setItem('id_token', token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  public isLoggedIn() {
    if (localStorage.getItem('expires_at') === null) {
      return false;
    }
    return moment().isBefore(this.getExpiration());
  }

  public logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public hasRole(role: string) {
    if (!this.isLoggedIn()) {
      return false;
    }

    const token = localStorage.getItem('id_token');
    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    return decodedJwtData.scopes.toString().includes(role.toString());
  }

  public getUserName(): string {
    const token = localStorage.getItem('id_token');
    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    return decodedJwtData.sub;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 401) {
        this.failedLoginAttempts = this.failedLoginAttempts + 1;
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
