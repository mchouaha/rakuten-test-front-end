import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {configs} from '../../../utils/constants';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

  @Input() parentForm: FormGroup;
  configs = configs;

  constructor() {}
}
