import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../shared/currency.service';
import { Currency } from '../shared/currency.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies : Currency[]

  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit(): void {
    this.currencies = this.currencyService.getCurrencies()
    console.log(this.currencies);
  }

}
