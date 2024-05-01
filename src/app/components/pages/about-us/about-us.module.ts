import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import {PartnerComponent} from '../../common/partner/partner.component';
import {TeamComponent} from '../../common/team/team.component';
import {AboutUsComponent} from './about-us.component';
import {FunfactsComponent} from '../../common/funfacts/funfacts.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HomeDemoOneModule} from '../home-demo-one/home-demo-one.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    FunfactsComponent,
    TeamComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    AboutUsRoutingModule,
    HomeDemoOneModule
  ]
})
export class AboutUsModule { }
