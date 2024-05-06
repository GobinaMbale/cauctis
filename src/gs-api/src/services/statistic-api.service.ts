/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class StatisticApiService extends __BaseService {
  static readonly getStatStruturePath = '/statistic-service/find-by-structure/{id}';

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
  getStatStrutureResponse(id: number): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/statistic-service/find-by-structure/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  getStatStruture(id: number): __Observable<{[key: string]: {}}> {
    return this.getStatStrutureResponse(id).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }
}

module StatisticApiService {
}

export { StatisticApiService }
