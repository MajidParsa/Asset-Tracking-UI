import { Component, OnInit } from '@angular/core';

import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css']
})
export class CurrencyAddComponent implements OnInit {
  currency: Currency

  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit(): void {
    this.currency = new Currency(null, null, null, null)
  }

  onAdd(): void {
  //  console.log(this.currency)
    this.currencyService.addCurrency(this.currency).subscribe(data => this.functionTest(data))

  }

  functionTest(currency: Currency){
    this.currency = currency
//    console.log(currency)
  }
}
