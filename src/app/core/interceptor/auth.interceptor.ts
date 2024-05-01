import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import {LocalStorageEnum} from '../../shared/enum/local-storage.enum';
import {SERVER_URL} from '../../app.constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalStorageService,
              private sessionStorage: SessionStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (request.url.startsWith('http') && !(SERVER_URL && request.url.startsWith(SERVER_URL)))) {
      return next.handle(request);
    }

    const token = this.localStorage.retrieve(LocalStorageEnum.TOKEN) || this.sessionStorage.retrieve(LocalStorageEnum.TOKEN);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }
    return next.handle(request);
  }

}
