/* tslint:disable */
import { StructureWarehouseRequest } from './structure-warehouse-request';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageStructureWarehouseRequest {
  content?: Array<StructureWarehouseRequest>;
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
