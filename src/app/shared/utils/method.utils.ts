import {RoleEnum} from '../enums/role.enum';
import {MenuInterface} from '../interfaces/menu.interface';

export function filterMenu(role: RoleEnum[], menus: MenuInterface[]): MenuInterface[] {
  return menus.reduce((acc, item) => {
    // Ajoutez l'element au menu s'il n'a pas de role ou si le role est inclut
    if (item.roles.length === 0 || role.every(authority => item.roles.includes(authority))) {
      console.log(item.name);
      acc.push(item);
    }
    if (item.children) {
      // Si l'element a des enfants, filtrez egalement les enfants en fonction du role
      const filteredChildren = item.children.map(child => {
        return {...child, name: child.name};
      }).filter(filteredChild => !filteredChild.roles
        || role.every(authority => filteredChild.roles.includes(authority)));
      if (filteredChildren.length > 0) {
        // Ajoutez l'element parent au menu s'il y a des enfants filtres
        acc.push({ ...item, children: filteredChildren});
      }
    }
    return acc;
  }, []);
}
