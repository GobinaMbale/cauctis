import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {AdministrationComponent} from './administration/administration.component';

const routes: Routes = [
  {path: 'admin', component: AdministrationComponent,
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)},
  {path: '', component: CustomerComponent,
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
