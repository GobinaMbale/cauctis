/* tslint:disable */
import { Bundle } from './bundle';
export interface Auction {
  active?: boolean;
  bundles?: Array<Bundle>;
  endDate?: string;
  id?: number;
  startDate?: string;
  status?: number;
}
