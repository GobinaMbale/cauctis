/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuctionRequest } from '../models/auction-request';
import { BundleRequest } from '../models/bundle-request';
import { PageAuctionRequest } from '../models/page-auction-request';
@Injectable({
  providedIn: 'root',
})
class AuctionApiService extends __BaseService {
  static readonly addBundlesPath = '/auction-service/add-bundles/{id}';
  static readonly confirmBundlesPath = '/auction-service/confirm-bundles/{id}';
  static readonly createPath = '/auction-service/create';
  static readonly findBundleByStructurePath = '/auction-service/find-bundles-by-structure/{idAuction}/{idStructure}';
  static readonly findByWarehousePath = '/auction-service/find-by-committee/{id}';
  static readonly findIncomingAuctionsPath = '/auction-service/find-incoming-and-confirmed';
  static readonly findIncomingAuctionsByStructurePath = '/auction-service/find-incoming-by-structure/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AuctionApiService.AddBundlesParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  addBundlesResponse(params: AuctionApiService.AddBundlesParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/auction-service/add-bundles/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `AuctionApiService.AddBundlesParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  addBundles(params: AuctionApiService.AddBundlesParams): __Observable<{}> {
    return this.addBundlesResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `AuctionApiService.ConfirmBundlesParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  confirmBundlesResponse(params: AuctionApiService.ConfirmBundlesParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/auction-service/confirm-bundles/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `AuctionApiService.ConfirmBundlesParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  confirmBundles(params: AuctionApiService.ConfirmBundlesParams): __Observable<{}> {
    return this.confirmBundlesResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  createResponse(body?: AuctionRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auction-service/create`,
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
  create(body?: AuctionRequest): __Observable<{}> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `AuctionApiService.FindBundleByStructureParams` containing the following parameters:
   *
   * - `idStructure`:
   *
   * - `idAuction`:
   *
   * @return successful operation
   */
  findBundleByStructureResponse(params: AuctionApiService.FindBundleByStructureParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auction-service/find-bundles-by-structure/${encodeURIComponent(String(params.idAuction))}/${encodeURIComponent(String(params.idStructure))}`,
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
   * @param params The `AuctionApiService.FindBundleByStructureParams` containing the following parameters:
   *
   * - `idStructure`:
   *
   * - `idAuction`:
   *
   * @return successful operation
   */
  findBundleByStructure(params: AuctionApiService.FindBundleByStructureParams): __Observable<{}> {
    return this.findBundleByStructureResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByWarehouseResponse(id: number): __Observable<__StrictHttpResponse<PageAuctionRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auction-service/find-by-committee/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageAuctionRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByWarehouse(id: number): __Observable<PageAuctionRequest> {
    return this.findByWarehouseResponse(id).pipe(
      __map(_r => _r.body as PageAuctionRequest)
    );
  }

  /**
   * @return successful operation
   */
  findIncomingAuctionsResponse(): __Observable<__StrictHttpResponse<PageAuctionRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auction-service/find-incoming-and-confirmed`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageAuctionRequest>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findIncomingAuctions(): __Observable<PageAuctionRequest> {
    return this.findIncomingAuctionsResponse().pipe(
      __map(_r => _r.body as PageAuctionRequest)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findIncomingAuctionsByStructureResponse(id: number): __Observable<__StrictHttpResponse<PageAuctionRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auction-service/find-incoming-by-structure/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageAuctionRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findIncomingAuctionsByStructure(id: number): __Observable<PageAuctionRequest> {
    return this.findIncomingAuctionsByStructureResponse(id).pipe(
      __map(_r => _r.body as PageAuctionRequest)
    );
  }
}

module AuctionApiService {

  /**
   * Parameters for addBundles
   */
  export interface AddBundlesParams {
    id: number;
    body?: AuctionRequest;
  }

  /**
   * Parameters for confirmBundles
   */
  export interface ConfirmBundlesParams {
    id: number;
    body?: Array<BundleRequest>;
  }

  /**
   * Parameters for findBundleByStructure
   */
  export interface FindBundleByStructureParams {
    idStructure: number;
    idAuction: number;
  }
}

export { AuctionApiService }
