/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserRequest } from '../models/user-request';
import { SignUpRequest } from '../models/sign-up-request';
@Injectable({
  providedIn: 'root',
})
class AdminApiService extends __BaseService {
  static readonly registerUserPath = '/admin-service/register';

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
  registerUserResponse(body?: SignUpRequest): __Observable<__StrictHttpResponse<UserRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin-service/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  registerUser(body?: SignUpRequest): __Observable<UserRequest> {
    return this.registerUserResponse(body).pipe(
      __map(_r => _r.body as UserRequest)
    );
  }
}

module AdminApiService {
}

export { AdminApiService }
