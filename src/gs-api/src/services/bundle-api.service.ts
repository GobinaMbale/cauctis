/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BundleRequest } from '../models/bundle-request';
import { PageBundleRequest } from '../models/page-bundle-request';
@Injectable({
  providedIn: 'root',
})
class BundleApiService extends __BaseService {
  static readonly createPath = '/bundle-service/create';
  static readonly createWithAuctionPath = '/bundle-service/create-with-auction';
  static readonly findByStructureListPath = '/bundle-service/find-by-structure-list/{id}';
  static readonly findByStructurePath = '/bundle-service/find-by-structure/{id}';
  static readonly findByWarehousePath = '/bundle-service/find-by-warehouse/{id}';
  static readonly findByWarehouseListPath = '/bundle-service/find-by-warehouses-ids';
  static readonly findByIdPath = '/bundle-service/{id}';

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
  createResponse(body?: BundleRequest): __Observable<__StrictHttpResponse<BundleRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/bundle-service/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BundleRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  create(body?: BundleRequest): __Observable<BundleRequest> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as BundleRequest)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  createWithAuctionResponse(body?: BundleRequest): __Observable<__StrictHttpResponse<BundleRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/bundle-service/create-with-auction`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BundleRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  createWithAuction(body?: BundleRequest): __Observable<BundleRequest> {
    return this.createWithAuctionResponse(body).pipe(
      __map(_r => _r.body as BundleRequest)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureListResponse(id: number): __Observable<__StrictHttpResponse<Array<BundleRequest>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bundle-service/find-by-structure-list/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BundleRequest>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureList(id: number): __Observable<Array<BundleRequest>> {
    return this.findByStructureListResponse(id).pipe(
      __map(_r => _r.body as Array<BundleRequest>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureResponse(id: number): __Observable<__StrictHttpResponse<PageBundleRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bundle-service/find-by-structure/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageBundleRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructure(id: number): __Observable<PageBundleRequest> {
    return this.findByStructureResponse(id).pipe(
      __map(_r => _r.body as PageBundleRequest)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByWarehouseResponse(id: number): __Observable<__StrictHttpResponse<PageBundleRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bundle-service/find-by-warehouse/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageBundleRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByWarehouse(id: number): __Observable<PageBundleRequest> {
    return this.findByWarehouseResponse(id).pipe(
      __map(_r => _r.body as PageBundleRequest)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  findByWarehouseListResponse(body?: BundleRequest): __Observable<__StrictHttpResponse<Array<BundleRequest>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/bundle-service/find-by-warehouses-ids`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BundleRequest>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  findByWarehouseList(body?: BundleRequest): __Observable<Array<BundleRequest>> {
    return this.findByWarehouseListResponse(body).pipe(
      __map(_r => _r.body as Array<BundleRequest>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<BundleRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bundle-service/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BundleRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findById(id: number): __Observable<BundleRequest> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as BundleRequest)
    );
  }
}

module BundleApiService {
}

export { BundleApiService }
