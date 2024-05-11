import {MenuInterface} from '../../../shared/interfaces/menu.interface';
import {RoleEnum} from '../../../shared/enums/role.enum';

export const sideMenuItems: MenuInterface[] = [
  {
    blockTitle: '',
    name: 'Tableau de bord',
    url: '/admin/dashboard',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Utilisateurs',
    url: '/admin/users',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Structures',
    url: '/admin/structures',
    roles: [RoleEnum.ROLE_SUPER_ADMIN, RoleEnum.ROLE_ADMIN],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Mon profil',
    url: '/admin/profile-user',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Magasins',
    url: '/admin/shops',
    roles: [RoleEnum.ROLE_ACONIER],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Lots',
    url: '/admin/lots',
    roles: [RoleEnum.ROLE_ACONIER],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Articles',
    url: '/admin/articles',
    roles: [RoleEnum.ROLE_ACONIER],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Enchères',
    url: '/admin/auctions',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
];
