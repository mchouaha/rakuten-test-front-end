import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {configs} from '../../../utils/constants';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent {

  @Input() parentForm: FormGroup;
  configs = configs;
  constructor() {}
}
