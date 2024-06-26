import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthJwtService} from '../service/auth-jwt.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {

  constructor(private authJwtService: AuthJwtService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 || err.status === 403) {
              this.authJwtService.logout();
            }
          }
        }
      )
    );

  }
}
