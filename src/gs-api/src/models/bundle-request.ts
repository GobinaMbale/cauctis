/* tslint:disable */
import { Article } from './article';
import { BundleImage } from './bundle-image';
import { Warehouse } from './warehouse';
export interface BundleRequest {
  active?: boolean;
  articles?: Array<Article>;
  auctionId?: number;
  currentCost?: number;
  customDeclarationRef?: string;
  entryDate?: string;
  entryDateText?: string;
  exitDate?: string;
  finalCost?: number;
  id?: number;
  images?: Array<BundleImage>;
  minCost?: number;
  status?: number;
  structureId?: number;
  transportDocRef?: string;
  warehouse?: Warehouse;
  warehouseId?: number;
  warehouseIds?: Array<number>;
}
