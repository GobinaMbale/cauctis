/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TypeStructureRequest } from '../models/type-structure-request';
@Injectable({
  providedIn: 'root',
})
class TypeStructureApiService extends __BaseService {
  static readonly createPath = '/type-structure-service/create';

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
  createResponse(body?: TypeStructureRequest): __Observable<__StrictHttpResponse<TypeStructureRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/type-structure-service/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TypeStructureRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  create(body?: TypeStructureRequest): __Observable<TypeStructureRequest> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as TypeStructureRequest)
    );
  }
}

module TypeStructureApiService {
}

export { TypeStructureApiService }
