/* tslint:disable */
import { StructureRequest } from './structure-request';
import { WarehouseRequest } from './warehouse-request';
export interface StructureWarehouseRequest {
  id?: number;
  structure?: StructureRequest;
  warehouse?: WarehouseRequest;
}
