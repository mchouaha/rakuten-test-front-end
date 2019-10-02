import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonalInfoComponent} from './main/form-payment/personal-info/personal-info.component';
import {ShippingInfoComponent} from './main/form-payment/shipping-info/shipping-info.component';
import {PaymentMethodComponent} from './main/form-payment/payment-method/payment-method.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {FormPaymentComponent} from './main/form-payment/formPayment.component';
import {ThankyouComponent} from './main/thankyou/thankyou.component';
import {ComponentsModule} from './layout/components/components.module';
import {MainModule} from './main/main.module' ;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
