import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteAccessGuard} from '../core/guard/route-access.guard';
import {RoleEnum} from '../shared/enums/role.enum';

function listEnumValuesWithExclusion<T>(enumType: T, excludedElements: Array<T[keyof T]>): Array<T[keyof T]> {
  return Object.values(enumType).filter(value => !excludedElements.includes(value));
}

export const excludedValues: Array<RoleEnum> = [RoleEnum.ROLE_CUSTOMER];

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [RouteAccessGuard],
    data: {
      role: listEnumValuesWithExclusion(RoleEnum, excludedValues)
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
