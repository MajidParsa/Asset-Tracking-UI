import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html',
  styleUrls: ['./currency-edit.component.css']
})
export class CurrencyEditComponent implements OnInit {
  currency: Currency;

  constructor(private currencyService: CurrencyService ) { }

  ngOnInit(): void {
  }

  onSave(){
    this.currencyService.updateCurrency(this.currency).subscribe(currency => this.currency = currency)
  }

}
