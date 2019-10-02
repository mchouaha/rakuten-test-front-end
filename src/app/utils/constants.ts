export const countriesInfoShipping = {
  germany: {
    code: 'DE',
    cost: '2.5',
    currency: '€'
  },
  austria: {
    code: 'AT',
    cost: '2.5',
    currency: '€'
  },
  spain: {
    code: 'ES',
    cost: '5.45',
    currency: '€'
  },
  france: {
    code: 'FR',
    cost: '2',
    currency: '€'
  },
  uk: {
    code: 'UK',
    cost: '2.75',
    currency: 'GBP'
  }
};

export const configs = {
  firstname: {
    labelName: 'Firstname',
    tabindex: '1',
    placeholder: 'Your firstname',
    fcn: 'firstname',
    readonly: false
  },
  surname: {
    labelName: 'Surname',
    tabindex: '2',
    placeholder: 'Your surname',
    fcn: 'surname',
    readonly: false
  },
  adress: {
    labelName: '',
    tabindex: '3',
    placeholder: '...',
    fcn: 'adress',
    readonly: false
  },
  country: {
    labelName: 'Country',
    tabindex: '4',
    placeholder: 'country',
    fcn: 'country',
    readonly: false
  },
  city: {
    labelName: 'City',
    tabindex: '5',
    placeholder: 'City',
    fcn: 'city',
    readonly: false
  },
  shippingcost: {
    labelName: 'Cost',
    tabindex: '6',
    placeholder: '-',
    fcn: 'shippingcost',
    readonly: true
  },
  cardname: {
    labelName: 'Card name',
    tabindex: '7',
    placeholder: 'Complete name',
    fcn: 'cardname',
    readonly: false
  },
  cardnumber: {
    labelName: 'Card number',
    tabindex: '8',
    placeholder: 'Complete name',
    fcn: 'cardnumber',
    readonly: false
  },
  cardcvv: {
    labelName: 'CVV',
    tabindex: '8',
    placeholder: 'Complete name',
    fcn: 'cardcvv',
    readonly: false
  },
  aggreement: {
    labelName: '',
    tabindex: '9',
    placeholder: 'Agree terms and conditions',
    fcn: 'aggreement',
    readonly: false
  },
};

export class Config {
  labelName: string;
  tabindex: string;
  placeholder: string;
  fcn: string;
  readonly: boolean;
}
