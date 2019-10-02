import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SuggestionsService} from '../../../services/suggestions.service';
import {countriesInfoShipping} from '../../../utils/constants';

@Component({
  selector: 'app-auto-complete-payment-form',
  templateUrl: './auto-complete-payment-form.component.html',
  styleUrls: ['./auto-complete-payment-form.component.scss']
})
export class AutoCompletePaymentFormComponent implements OnInit {
  @ViewChild('auto', {static: false}) auto;
  @Input() data: Observable<string[]>;
  @Input() parentForm: FormGroup;
  @Input() config: any;
  keyword = 'name';
  labelName: string;
  tabindex: string;
  placeholder: string;
  readonly: boolean;
  fcn: string;

  constructor(private suggestionsService: SuggestionsService) { }

  ngOnInit(): void {
    const {labelName, tabindex, placeholder, fcn, readonly} = this.config;
    this.labelName = labelName;
    this.tabindex = tabindex;
    this.placeholder = placeholder;
    this.readonly = readonly;
    this.fcn = fcn;
  }
  get formControl() {
    return this.parentForm.get('country');
  }

  selectEvent(item): void {
    // do something with selected item
  }

  onChangeSearch(query: string): void {
    const countryCode = countriesInfoShipping[this.parentForm.value.country].code;
    if (query.length > 2) {
      this.data = this.suggestionsService.getSuggestions(countryCode, query)
        .pipe(
          map( data => {
            const suggestionsFormatted = [];
            data.forEach(suggestion => {
              suggestionsFormatted.push({name: suggestion});
            });
            return suggestionsFormatted;
          } )
        );
    }
  }

  onFocused(e): void {
    // do something when input is focused
  }

  closePanel(e): void {
    this.auto.close();
  }
}
