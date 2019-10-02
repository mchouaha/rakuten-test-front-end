import {NgModule} from '@angular/core';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {PaymentMethodComponent} from './payment-method/payment-method.component';
import {ShippingInfoComponent} from './shipping-info/shipping-info.component';
import {FormPaymentComponent} from './formPayment.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {ComponentsModule} from '../../layout/components/components.module';


@NgModule({
  declarations: [
    FormPaymentComponent,
    PaymentMethodComponent,
    PersonalInfoComponent,
    ShippingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    ComponentsModule
  ],
  exports: [
    FormPaymentComponent,
    PaymentMethodComponent,
    PersonalInfoComponent,
    ShippingInfoComponent
  ]
})
export class FormPaymentModule { }
