/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AdminApiService } from './services/admin-api.service';
import { ArticleApiService } from './services/article-api.service';
import { AuctionRegistrationApiService } from './services/auction-registration-api.service';
import { AuctionApiService } from './services/auction-api.service';
import { AuthApiService } from './services/auth-api.service';
import { BidApiService } from './services/bid-api.service';
import { BundleApiService } from './services/bundle-api.service';
import { CommitteeMemberApiService } from './services/committee-member-api.service';
import { NotificationApiService } from './services/notification-api.service';
import { PaymentApiService } from './services/payment-api.service';
import { StatisticApiService } from './services/statistic-api.service';
import { StructureApiService } from './services/structure-api.service';
import { TypeStructureApiService } from './services/type-structure-api.service';
import { UserApiService } from './services/user-api.service';
import { WarehouseApiService } from './services/warehouse-api.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AdminApiService,
    ArticleApiService,
    AuctionRegistrationApiService,
    AuctionApiService,
    AuthApiService,
    BidApiService,
    BundleApiService,
    CommitteeMemberApiService,
    NotificationApiService,
    PaymentApiService,
    StatisticApiService,
    StructureApiService,
    TypeStructureApiService,
    UserApiService,
    WarehouseApiService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
