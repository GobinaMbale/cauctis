/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleRequest } from '../models/article-request';
import { PageArticleRequest } from '../models/page-article-request';
@Injectable({
  providedIn: 'root',
})
class ArticleApiService extends __BaseService {
  static readonly createPath = '/article-service/create';
  static readonly findByBundlePath = '/article-service/find-by-bundle/{id}';
  static readonly findByStructurePath = '/article-service/find-by-structure/{id}';

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
  createResponse(body?: ArticleRequest): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/article-service/create`,
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
  create(body?: ArticleRequest): __Observable<{}> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByBundleResponse(id: number): __Observable<__StrictHttpResponse<Array<ArticleRequest>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/article-service/find-by-bundle/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleRequest>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByBundle(id: number): __Observable<Array<ArticleRequest>> {
    return this.findByBundleResponse(id).pipe(
      __map(_r => _r.body as Array<ArticleRequest>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructureResponse(id: number): __Observable<__StrictHttpResponse<PageArticleRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/article-service/find-by-structure/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageArticleRequest>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByStructure(id: number): __Observable<PageArticleRequest> {
    return this.findByStructureResponse(id).pipe(
      __map(_r => _r.body as PageArticleRequest)
    );
  }
}

module ArticleApiService {
}

export { ArticleApiService }
