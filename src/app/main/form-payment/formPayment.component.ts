import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {configs} from '../../utils/constants';

@Component({
  selector: 'app-mainform',
  templateUrl: './formPayment.component.html',
  styleUrls: ['./formPayment.component.scss']
})
export class FormPaymentComponent implements OnInit {
  parentForm: FormGroup;
  configs = configs;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.parentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[A-Za-z -]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[A-Za-z -]+$')]],
      adress: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]],
      country: [null, Validators.required],
      city: ['', Validators.required],
      shippingcost: ['', Validators.required],
      cardname: ['', [Validators.required, Validators.required, Validators.pattern('^[A-Za-z -]+$')]],
      cardnumber: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(16), Validators.maxLength(16)]],
      cardcvv: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(3), Validators.maxLength(3)]],
      aggreement: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.parentForm.valid) {
      this.router.navigate(['/thankyou']);
    } else {
      this.validateAllFormFields(this.parentForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
