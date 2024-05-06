import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import {FooterStyleOneComponent} from './common/footer-style-one/footer-style-one.component';
import {NavbarStyleOneComponent} from './common/navbar-style-one/navbar-style-one.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './sign-in/sign-in.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomerComponent,
    SignInComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
