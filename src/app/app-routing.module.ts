import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ThankyouComponent} from "./main/thankyou/thankyou.component";
import {FormPaymentComponent} from "./main/form-payment/formPayment.component";

const routes: Routes = [
  { path: '',  component: FormPaymentComponent, pathMatch: 'full' },
  { path: 'thankyou', component: ThankyouComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

