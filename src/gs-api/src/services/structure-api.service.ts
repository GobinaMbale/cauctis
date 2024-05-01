/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StructureRequest } from '../models/structure-request';
import { PageUserRequest } from '../models/page-user-request';
@Injectable({
  providedIn: 'root',
})
class StructureApiService extends __BaseService {
  static readonly createPath = '/structure-service/create';
  static readonly findByStructurePath = '/structure-service/get-users/{id}';
  static readonly findByIdPath = '/structure-service/{id}';

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
  createResponse(body?: StructureRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/structure-service/create`,
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
  create(body?: StructureRequest): __Observable<{}> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureResponse(id: number): __Observable<__StrictHttpResponse<PageUserRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/structure-service/get-users/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageUserRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructure(id: number): __Observable<PageUserRequest> {
    return this.findByStructureResponse(id).pipe(
      __map(_r => _r.body as PageUserRequest)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/structure-service/${encodeURIComponent(String(id))}`,
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
   * @param id undefined
   * @return successful operation
   */
  findById(id: number): __Observable<{}> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module StructureApiService {
}

export { StructureApiService }
