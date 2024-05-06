import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeDemoOneComponent} from './home-demo-one.component';

const routes: Routes = [
  {path: '', component: HomeDemoOneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDemoOneRoutingModule { }
