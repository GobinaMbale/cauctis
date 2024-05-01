import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import {DashboardSidemenuComponent} from '../components/common/dashboard-sidemenu/dashboard-sidemenu.component';
import {DashboardNavbarComponent} from '../components/common/dashboard-navbar/dashboard-navbar.component';
import {CopyrightsComponent} from '../components/pages/dashboard/copyrights/copyrights.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AdministrationComponent,
    DashboardSidemenuComponent,
    DashboardNavbarComponent,
    CopyrightsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SelectDropDownModule,
    NgxTypedJsModule,
    FormsModule,
    NgxPaginationModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
