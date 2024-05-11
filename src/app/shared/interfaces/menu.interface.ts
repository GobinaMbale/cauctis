import {RoleEnum} from '../enums/role.enum';

export interface MenuInterface {
  blockTitle?: string | null;
  name: string;
  url: string;
  roles?: RoleEnum[];
  icon: string;
  children?: MenuInterface[];
}
