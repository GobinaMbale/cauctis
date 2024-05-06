/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuctionRegistrationRequest } from '../models/auction-registration-request';
@Injectable({
  providedIn: 'root',
})
class AuctionRegistrationApiService extends __BaseService {
  static readonly checkIfUserIsRegisteredPath = '/auction-registration-service/check-user-registration';
  static readonly createPath = '/auction-registration-service/create';

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
  checkIfUserIsRegisteredResponse(body?: AuctionRegistrationRequest): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auction-registration-service/check-user-registration`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  checkIfUserIsRegistered(body?: AuctionRegistrationRequest): __Observable<boolean> {
    return this.checkIfUserIsRegisteredResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  createResponse(body?: AuctionRegistrationRequest): __Observable<__StrictHttpResponse<AuctionRegistrationRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auction-registration-service/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuctionRegistrationRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  create(body?: AuctionRegistrationRequest): __Observable<AuctionRegistrationRequest> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as AuctionRegistrationRequest)
    );
  }
}

module AuctionRegistrationApiService {
}

export { AuctionRegistrationApiService }
