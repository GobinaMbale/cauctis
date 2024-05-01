import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('../components/pages/home-demo-one/home-demo-one.module').then(m => m.HomeDemoOneModule)},
  {path: 'about-us', loadChildren: () => import('../components/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: '**', loadChildren: () => import('../components/pages/not-found/not-found.module').then(m => m.NotFoundModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
