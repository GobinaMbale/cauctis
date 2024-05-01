/* tslint:disable */
import { BidRequest } from './bid-request';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageBidRequest {
  content?: Array<BidRequest>;
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
