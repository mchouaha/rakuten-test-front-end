import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-select-payment-form',
  templateUrl: './input-select-payment-form.component.html',
  styleUrls: ['./input-select-payment-form.component.scss']
})
export class InputSelectPaymentFormComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() data: [];
  @Input() config: any;
  labelName: string;
  tabindex: string;
  placeholder: string;
  readonly: boolean;
  fcn: string;

  constructor() { }

  ngOnInit(): void {
    const {labelName, tabindex, placeholder, fcn, readonly} = this.config;
    this.labelName = labelName;
    this.tabindex = tabindex;
    this.placeholder = placeholder;
    this.readonly = readonly;
    this.fcn = fcn;
  }

  get formControl() {
    return this.parentForm.get(this.fcn);
  }
}
