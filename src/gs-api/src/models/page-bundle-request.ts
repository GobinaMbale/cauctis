/* tslint:disable */
import { BundleRequest } from './bundle-request';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageBundleRequest {
  content?: Array<BundleRequest>;
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
