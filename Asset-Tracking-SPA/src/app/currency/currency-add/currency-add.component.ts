import { Component, OnInit } from '@angular/core';

import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css']
})
export class CurrencyAddComponent implements OnInit {
  currency: Currency

  constructor(private currencyService: CurrencyService, private router: Router) {

  }

  ngOnInit(): void {
    this.currency = new Currency(null, null, null, null, null)
  }

  onAdd(): void {
    this.currencyService.addCurrency(this.currency).subscribe(data => this.functionTest(data))
    this.router.navigate(["/currency"])
  }

  functionTest(currency: Currency){
    this.currency = currency
  }
}
