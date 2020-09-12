import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html',
  styleUrls: ['./currency-edit.component.css']
})
export class CurrencyEditComponent implements OnInit {
  currency: Currency;
  id: number;

  constructor(private currencyService: CurrencyService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.currency = new Currency(null, null, null, null, null)
    this.id = this.route.snapshot.params["id"]
    this.currencyService.getCurrency(this.id).subscribe(currency => this.currency = currency)
  }

  onSave(){
    //console.log(this.currency)
    this.currencyService.updateCurrency(this.currency).subscribe(currency => this.currency = currency)
  }

}
