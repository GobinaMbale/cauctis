import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {StatsComponent} from './stats/stats.component';
import {RecentActivitiesComponent} from './recent-activities/recent-activities.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatsComponent,
    RecentActivitiesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
