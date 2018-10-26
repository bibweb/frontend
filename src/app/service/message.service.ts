import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private errorMessage: string;

  constructor() {
  }

  public addError(err) {
    this.errorMessage = String(err.status);
  }

  public removeError(): void {
    this.errorMessage = null;
  }

  public getLastError() {
    return this.errorMessage;
  }

}
