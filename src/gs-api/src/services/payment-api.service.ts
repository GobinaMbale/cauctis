/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PaymentRequest } from '../models/payment-request';
import { Payment } from '../models/payment';
@Injectable({
  providedIn: 'root',
})
class PaymentApiService extends __BaseService {
  static readonly makePaymentPath = '/payment-service/make-payment';
  static readonly webhookPath = '/payment-service/webhook';

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
  makePaymentResponse(body?: PaymentRequest): __Observable<__StrictHttpResponse<PaymentRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/payment-service/make-payment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaymentRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  makePayment(body?: PaymentRequest): __Observable<PaymentRequest> {
    return this.makePaymentResponse(body).pipe(
      __map(_r => _r.body as PaymentRequest)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  webhookResponse(body?: {[key: string]: {}}): __Observable<__StrictHttpResponse<Payment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/payment-service/webhook`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Payment>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  webhook(body?: {[key: string]: {}}): __Observable<Payment> {
    return this.webhookResponse(body).pipe(
      __map(_r => _r.body as Payment)
    );
  }
}

module PaymentApiService {
}

export { PaymentApiService }
