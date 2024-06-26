/* tslint:disable */
import { AuctionRequest } from './auction-request';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageAuctionRequest {
  content?: Array<AuctionRequest>;
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
