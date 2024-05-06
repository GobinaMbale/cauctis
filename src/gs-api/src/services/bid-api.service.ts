/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BidRequest } from '../models/bid-request';
import { BidRequestTwo } from '../models/bid-request-two';
import { PageBidRequest } from '../models/page-bid-request';
@Injectable({
  providedIn: 'root',
})
class BidApiService extends __BaseService {
  static readonly acceptBidPath = '/bid-service/accept';
  static readonly createPath = '/bid-service/create';
  static readonly findByStatusPath = '/bid-service/find-by-auction-and-status/{auctionId}/{status}';
  static readonly findByBundlePath = '/bid-service/find-by-bundle/{id}';
  static readonly findByTaxpayerAndStatusPath = '/bid-service/find-by-taxpayer-and-status/{id}/{status}';
  static readonly findByTaxpayerPath = '/bid-service/find-by-taxpayer/{id}';
  static readonly rejectBidPath = '/bid-service/refuse';

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
  acceptBidResponse(body?: BidRequest): __Observable<__StrictHttpResponse<BidRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/bid-service/accept`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BidRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  acceptBid(body?: BidRequest): __Observable<BidRequest> {
    return this.acceptBidResponse(body).pipe(
      __map(_r => _r.body as BidRequest)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  createResponse(body?: BidRequestTwo): __Observable<__StrictHttpResponse<Array<BidRequest>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/bid-service/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BidRequest>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  create(body?: BidRequestTwo): __Observable<Array<BidRequest>> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as Array<BidRequest>)
    );
  }

  /**
   * @param params The `BidApiService.FindByStatusParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `auctionId`:
   *
   * @return successful operation
   */
  findByStatusResponse(params: BidApiService.FindByStatusParams): __Observable<__StrictHttpResponse<Array<BidRequest>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bid-service/find-by-auction-and-status/${encodeURIComponent(String(params.auctionId))}/${encodeURIComponent(String(params.status))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BidRequest>>;
      })
    );
  }
  /**
   * @param params The `BidApiService.FindByStatusParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `auctionId`:
   *
   * @return successful operation
   */
  findByStatus(params: BidApiService.FindByStatusParams): __Observable<Array<BidRequest>> {
    return this.findByStatusResponse(params).pipe(
      __map(_r => _r.body as Array<BidRequest>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByBundleResponse(id: number): __Observable<__StrictHttpResponse<Array<BidRequest>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bid-service/find-by-bundle/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BidRequest>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByBundle(id: number): __Observable<Array<BidRequest>> {
    return this.findByBundleResponse(id).pipe(
      __map(_r => _r.body as Array<BidRequest>)
    );
  }

  /**
   * @param params The `BidApiService.FindByTaxpayerAndStatusParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `id`:
   *
   * @return successful operation
   */
  findByTaxpayerAndStatusResponse(params: BidApiService.FindByTaxpayerAndStatusParams): __Observable<__StrictHttpResponse<PageBidRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bid-service/find-by-taxpayer-and-status/${encodeURIComponent(String(params.id))}/${encodeURIComponent(String(params.status))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageBidRequest>;
      })
    );
  }
  /**
   * @param params The `BidApiService.FindByTaxpayerAndStatusParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `id`:
   *
   * @return successful operation
   */
  findByTaxpayerAndStatus(params: BidApiService.FindByTaxpayerAndStatusParams): __Observable<PageBidRequest> {
    return this.findByTaxpayerAndStatusResponse(params).pipe(
      __map(_r => _r.body as PageBidRequest)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByTaxpayerResponse(id: number): __Observable<__StrictHttpResponse<PageBidRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/bid-service/find-by-taxpayer/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageBidRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByTaxpayer(id: number): __Observable<PageBidRequest> {
    return this.findByTaxpayerResponse(id).pipe(
      __map(_r => _r.body as PageBidRequest)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  rejectBidResponse(body?: BidRequest): __Observable<__StrictHttpResponse<BidRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/bid-service/refuse`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BidRequest>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  rejectBid(body?: BidRequest): __Observable<BidRequest> {
    return this.rejectBidResponse(body).pipe(
      __map(_r => _r.body as BidRequest)
    );
  }
}

module BidApiService {

  /**
   * Parameters for findByStatus
   */
  export interface FindByStatusParams {
    status: number;
    auctionId: number;
  }

  /**
   * Parameters for findByTaxpayerAndStatus
   */
  export interface FindByTaxpayerAndStatusParams {
    status: number;
    id: number;
  }
}

export { BidApiService }
