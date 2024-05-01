/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { WarehouseRequest } from '../models/warehouse-request';
import { PageStructureWarehouseRequest } from '../models/page-structure-warehouse-request';
@Injectable({
  providedIn: 'root',
})
class WarehouseApiService extends __BaseService {
  static readonly createPath = '/warehouse-service/create';
  static readonly findByStructureAndAuctionPath = '/warehouse-service/find-by-structure-and-auction';
  static readonly findByStructureListPath = '/warehouse-service/find-by-structure-list/{id}';
  static readonly findByStructurePath = '/warehouse-service/find-by-structure/{id}';
  static readonly addWarehousePicturePath = '/warehouse-service/upload-picture';

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
  createResponse(body?: WarehouseRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/warehouse-service/create`,
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
  create(body?: WarehouseRequest): __Observable<{}> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  findByStructureAndAuctionResponse(body?: WarehouseRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/warehouse-service/find-by-structure-and-auction`,
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
  findByStructureAndAuction(body?: WarehouseRequest): __Observable<{}> {
    return this.findByStructureAndAuctionResponse(body).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureListResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/warehouse-service/find-by-structure-list/${encodeURIComponent(String(id))}`,
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
  findByStructureList(id: number): __Observable<{}> {
    return this.findByStructureListResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureResponse(id: number): __Observable<__StrictHttpResponse<PageStructureWarehouseRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/warehouse-service/find-by-structure/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageStructureWarehouseRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructure(id: number): __Observable<PageStructureWarehouseRequest> {
    return this.findByStructureResponse(id).pipe(
      __map(_r => _r.body as PageStructureWarehouseRequest)
    );
  }

  /**
   * @param params The `WarehouseApiService.AddWarehousePictureParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return successful operation
   */
  addWarehousePictureResponse(params: WarehouseApiService.AddWarehousePictureParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.file != null) __params = __params.set('file', params.file.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/warehouse-service/upload-picture`,
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
   * @param params The `WarehouseApiService.AddWarehousePictureParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return successful operation
   */
  addWarehousePicture(params: WarehouseApiService.AddWarehousePictureParams): __Observable<{}> {
    return this.addWarehousePictureResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module WarehouseApiService {

  /**
   * Parameters for addWarehousePicture
   */
  export interface AddWarehousePictureParams {
    id: number;
    file: any;
  }
}

export { WarehouseApiService }
