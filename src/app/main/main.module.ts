import {NgModule} from '@angular/core';
import {ThankyouModule} from './thankyou/thankyou.module';
import {FormPaymentModule} from './form-payment/form-payment.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormPaymentModule,
    ThankyouModule
  ]
})
export class MainModule { }
