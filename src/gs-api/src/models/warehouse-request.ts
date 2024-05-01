/* tslint:disable */
import { Auction } from './auction';
import { StructureRequest } from './structure-request';
import { StructureWarehouse } from './structure-warehouse';
export interface WarehouseRequest {
  active?: boolean;
  auctions?: Array<Auction>;
  id?: number;
  location?: string;
  name?: string;
  picture?: string;
  structure?: StructureRequest;
  structureId?: number;
  structureWarehouses?: Array<StructureWarehouse>;
  structuresRequest?: Array<StructureRequest>;
  warehouseIds?: Array<number>;
}
