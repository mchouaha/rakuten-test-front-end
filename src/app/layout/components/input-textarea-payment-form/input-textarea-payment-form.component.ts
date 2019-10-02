import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Config} from '../../../utils/constants';

@Component({
  selector: 'app-input-textarea-payment-form',
  templateUrl: './input-textarea-payment-form.component.html',
  styleUrls: ['./input-textarea-payment-form.component.scss']
})
export class InputTextareaPaymentFormComponent implements OnInit{

  @Input() parentForm: FormGroup;
  @Input() config: Config;
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
