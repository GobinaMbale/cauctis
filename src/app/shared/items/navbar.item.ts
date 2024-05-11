import {MenuInterface} from '../interfaces/menu.interface';
import {RoleEnum} from '../enums/role.enum';
export const navBarItems: MenuInterface[] = [
  {
    blockTitle: '',
    name: 'Accueil',
    url: '/',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Enchères',
    url: '/auctions',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Magasins',
    url: '/shops',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'A propos',
    url: '/about-us',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Contact',
    url: '/contact',
    roles: [],
    icon: 'bx-home-circle',
    children: []
  },
  {
    name: 'Administration',
    url: '/admin/dashboard',
    roles: [RoleEnum.ROLE_SUPER_ADMIN, RoleEnum.ROLE_ADMIN,
      RoleEnum.ROLE_ACONIER, RoleEnum.ROLE_CONTRIBUABLE,
      RoleEnum.ROLE_COMITE, RoleEnum.ROLE_TRESOR],
    icon: 'bx-home-circle',
    children: []
  }
];
