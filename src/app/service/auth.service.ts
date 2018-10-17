import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as moment from "moment";

import { LoginUser } from '../model/loginUser';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  private authUrl = environment.bibwebApiUrl + '/token/generate-token';  // URL to web api

  constructor(private http: HttpClient) { }

  login(loginUser: LoginUser): Observable<void> {
	return this.http.post(this.authUrl, loginUser, httpOptions).pipe(
      tap(res => console.log(`logged in user ${loginUser.username}`)),
      catchError(this.handleError<any>('login'))
    );
  }
  
  public setSession(token: string, expiresIn: number) {
	const expiresAt = moment().add(expiresIn, 'second');
	localStorage.setItem('id_token', token);
	localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
  
  public isLoggedIn() {
	if(localStorage.getItem("expires_at") === null) {
		return false;
	}
	return moment().isBefore(this.getExpiration());
  }
  
  public logout(): void {
	localStorage.removeItem('id_token');
	localStorage.removeItem('expires_at');
  }
  
  public hasRole(role: string) {
	if(!this.isLoggedIn()) {
		return false;
	}		
	
	const token = localStorage.getItem('id_token');
	const jwtData = token.split('.')[1]
	const decodedJwtJsonData = window.atob(jwtData)
	const decodedJwtData = JSON.parse(decodedJwtJsonData)
	
	const retVal = decodedJwtData.scopes.toString().includes(role.toString());

	return retVal;
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
  } 
  
  
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
