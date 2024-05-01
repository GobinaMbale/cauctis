/* tslint:disable */
import { ArticleRequest } from './article-request';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageArticleRequest {
  content?: Array<ArticleRequest>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
