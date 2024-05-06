import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDemoOneRoutingModule } from './home-demo-one-routing.module';
import {AppDownloadComponent} from '../../common/app-download/app-download.component';
import {HomeoneBlogComponent} from './homeone-blog/homeone-blog.component';
import {HowItWorksComponent} from '../../common/how-it-works/how-it-works.component';
import {FeedbackStyleOneComponent} from '../../common/feedback-style-one/feedback-style-one.component';
import {HomeoneDestinationsComponent} from './homeone-destinations/homeone-destinations.component';
import {CategoryComponent} from '../../common/category/category.component';
import {HomeoneListingsComponent} from './homeone-listings/homeone-listings.component';
import {FeaturesComponent} from '../../common/features/features.component';
import {HomeDemoOneComponent} from './home-demo-one.component';
import {HomeoneBannerComponent} from './homeone-banner/homeone-banner.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomeDemoOneComponent,
    FeaturesComponent,
    HomeoneBannerComponent,
    HomeoneListingsComponent,
    CategoryComponent,
    HomeoneDestinationsComponent,
    FeedbackStyleOneComponent,
    HowItWorksComponent,
    HomeoneBlogComponent,
    AppDownloadComponent
  ],
  exports: [
    HowItWorksComponent,
    FeedbackStyleOneComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SelectDropDownModule,
    NgxTypedJsModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    HomeDemoOneRoutingModule
  ]
})
export class HomeDemoOneModule { }
