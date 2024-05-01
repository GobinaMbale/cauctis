/* tslint:disable */
import { Article } from './article';
import { Bid } from './bid';
import { BundleImage } from './bundle-image';
import { Payment } from './payment';
import { Warehouse } from './warehouse';
export interface Bundle {
  active?: boolean;
  articles?: Array<Article>;
  bids?: Array<Bid>;
  currentCost?: number;
  customDeclarationRef?: string;
  entryDate?: string;
  exitDate?: string;
  finalCost?: number;
  id?: number;
  images?: Array<BundleImage>;
  minCost?: number;
  payments?: Array<Payment>;
  status?: number;
  transportDocRef?: string;
  warehouse?: Warehouse;
}
