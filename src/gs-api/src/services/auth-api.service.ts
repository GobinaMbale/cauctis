/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LoginRequest } from '../models/login-request';
import { SignUpRequest } from '../models/sign-up-request';
@Injectable({
  providedIn: 'root',
})
class AuthApiService extends __BaseService {
  static readonly authenticateUserPath = '/auth-service/login';
  static readonly getCurrentUserPath = '/auth-service/me';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateUserResponse(body?: LoginRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth-service/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateUser(body?: LoginRequest): __Observable<{}> {
    return this.authenticateUserResponse(body).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return successful operation
   */
  getCurrentUserResponse(): __Observable<__StrictHttpResponse<SignUpRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth-service/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SignUpRequest>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getCurrentUser(): __Observable<SignUpRequest> {
    return this.getCurrentUserResponse().pipe(
      __map(_r => _r.body as SignUpRequest)
    );
  }
}

module AuthApiService {
}

export { AuthApiService }
