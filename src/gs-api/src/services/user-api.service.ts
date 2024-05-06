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
class UserApiService extends __BaseService {
  static readonly registerUserPath = '/user-service/register';
  static readonly registerTaxPayerPath = '/user-service/register-taxpayer';
  static readonly findByIdPath = '/user-service/{id}';

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
      this.rootUrl + `/user-service/register`,
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

  /**
   * @param body undefined
   * @return successful operation
   */
  registerTaxPayerResponse(body?: SignUpRequest): __Observable<__StrictHttpResponse<UserRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user-service/register-taxpayer`,
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
  registerTaxPayer(body?: SignUpRequest): __Observable<UserRequest> {
    return this.registerTaxPayerResponse(body).pipe(
      __map(_r => _r.body as UserRequest)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<SignUpRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user-service/${encodeURIComponent(String(id))}`,
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
   * @param id undefined
   * @return successful operation
   */
  findById(id: number): __Observable<SignUpRequest> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as SignUpRequest)
    );
  }
}

module UserApiService {
}

export { UserApiService }
