/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Notification } from '../models/notification';
@Injectable({
  providedIn: 'root',
})
class NotificationApiService extends __BaseService {
  static readonly findByStructurePath = '/notification-service/find-by-structure/{id}';
  static readonly findTaxpayerPath = '/notification-service/find-by-taxpayer/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureResponse(id: number): __Observable<__StrictHttpResponse<Array<Notification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/notification-service/find-by-structure/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Notification>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructure(id: number): __Observable<Array<Notification>> {
    return this.findByStructureResponse(id).pipe(
      __map(_r => _r.body as Array<Notification>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findTaxpayerResponse(id: number): __Observable<__StrictHttpResponse<Array<Notification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/notification-service/find-by-taxpayer/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Notification>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findTaxpayer(id: number): __Observable<Array<Notification>> {
    return this.findTaxpayerResponse(id).pipe(
      __map(_r => _r.body as Array<Notification>)
    );
  }
}

module NotificationApiService {
}

export { NotificationApiService }
