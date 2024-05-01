/* tslint:disable */
import { CommitteeMember } from './committee-member';
import { UserProfile } from './user-profile';
import { ProfileRequest } from './profile-request';
export interface UserRequest {
  active?: boolean;
  committeeMembers?: Array<CommitteeMember>;
  createdAt?: string;
  deleted?: boolean;
  email?: string;
  fax?: string;
  id?: number;
  idCommittee?: number;
  idCreatedBy?: number;
  idStructure?: number;
  modifiedAt?: string;
  name?: string;
  password?: string;
  phone?: string;
  phone1?: string;
  phone2?: string;
  picture?: string;
  president?: boolean;
  profileName?: string;
  profiles?: Array<UserProfile>;
  profilesRequest?: Array<ProfileRequest>;
  secretary?: boolean;
  tin?: string;
}
