import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MessageService} from '@app/service/message.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('id_token');

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + idToken)
      });

      return next.handle(cloned).pipe(tap((event: HttpEvent<any>) => {
        this.messageService.removeError();
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.messageService.addError(err);
        }
      }));
    } else {
      return next.handle(req);
    }
  }
}
