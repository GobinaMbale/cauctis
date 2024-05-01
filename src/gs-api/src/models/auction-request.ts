/* tslint:disable */
import { AuctionWarehouse } from './auction-warehouse';
import { Bundle } from './bundle';
import { BundleRequest } from './bundle-request';
import { WarehouseRequest } from './warehouse-request';
export interface AuctionRequest {
  active?: boolean;
  auctionWarehouses?: Array<AuctionWarehouse>;
  bundleIds?: Array<number>;
  bundles?: Array<Bundle>;
  bundlesRequests?: Array<BundleRequest>;
  committeeId?: number;
  endDate?: string;
  endDayAndTime?: string;
  id?: number;
  idCreatedBy?: number;
  numberOfBids?: number;
  startDate?: string;
  startDayAndTime?: string;
  status?: number;
  warehouseIds?: Array<number>;
  warehouseRequests?: Array<WarehouseRequest>;
}
