/* tslint:disable */
import { TypeStructureRequest } from './type-structure-request';
import { TypeStructure } from './type-structure';
export interface StructureRequest {
  active?: boolean;
  address?: string;
  address1?: string;
  address2?: string;
  description?: string;
  email?: string;
  fax?: string;
  id?: number;
  idCreatedBy?: number;
  individualsOnly?: boolean;
  mainLFBureau?: boolean;
  name?: string;
  niu?: string;
  otherInformations?: string;
  phone?: string;
  postPaid?: boolean;
  shortName?: string;
  typeStructureIds?: Array<number>;
  typeStructureRequest?: Array<TypeStructureRequest>;
  typeStructures?: Array<TypeStructure>;
  website?: string;
}
