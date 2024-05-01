/* tslint:disable */
import { BundleRequest } from './bundle-request';
export interface PaymentRequest {
  amount?: number;
  bundleId?: number;
  bundleRequest?: BundleRequest;
  date?: string;
  id?: number;
  note?: string;
  phone?: string;
  provider?: string;
  reference?: string;
  status?: string;
  txnId?: string;
  typePayment?: string;
}
