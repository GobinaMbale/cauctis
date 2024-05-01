/* tslint:disable */
import { ArticleRequest } from './article-request';
export interface BidRequest {
  amount?: number;
  articleNames?: string;
  articles?: Array<ArticleRequest>;
  bundleReference?: string;
  createdAt?: string;
  currentCost?: number;
  id?: number;
  idAuction?: number;
  idBundle?: number;
  idUser?: number;
  motif?: string;
  status?: number;
  statusBundle?: number;
  usermail?: string;
  username?: string;
  userphone?: string;
}
