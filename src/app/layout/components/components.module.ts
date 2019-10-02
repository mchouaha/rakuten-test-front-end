import {NgModule} from '@angular/core';
import {AutoCompletePaymentFormComponent} from './auto-complete-payment-form/auto-complete-payment-form.component';
import {InputCheckboxPaymentFormComponent} from './input-checkbox-payment-form/input-checkbox-payment-form.component';
import {InputSelectPaymentFormComponent} from './input-select-payment-form/input-select-payment-form.component';
import {InputTextPaymentFormComponent} from './input-text-payment-form/input-text-payment-form.component';
import {InputTextareaPaymentFormComponent} from './input-textarea-payment-form/input-textarea-payment-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AutoCompletePaymentFormComponent,
    InputCheckboxPaymentFormComponent,
    InputSelectPaymentFormComponent,
    InputTextPaymentFormComponent,
    InputTextareaPaymentFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  exports: [
    AutoCompletePaymentFormComponent,
    InputCheckboxPaymentFormComponent,
    InputSelectPaymentFormComponent,
    InputTextPaymentFormComponent,
    InputTextareaPaymentFormComponent
  ]
})
export class ComponentsModule { }
