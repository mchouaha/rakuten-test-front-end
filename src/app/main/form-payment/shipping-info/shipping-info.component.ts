import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {countriesInfoShipping} from '../../../utils/constants';
import {configs} from '../../../utils/constants';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss']
})
export class ShippingInfoComponent implements OnInit {

  @Input() parentForm: FormGroup;
  countries = Object.keys(countriesInfoShipping);
  suggestionsObs: Observable<string[]>;
  configs = configs;
  constructor() {
  }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.parentForm.get('country').valueChanges.subscribe(val => {
      this.setShippingCost(val);
    });
  }

  setShippingCost(country: string): void {
    const cost = countriesInfoShipping[country].cost;
    const currency = countriesInfoShipping[country].currency;
    this.parentForm.controls.shippingcost.setValue(cost + currency);
  }
}
