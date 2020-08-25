import { Injectable } from '@angular/core';
import { Currency } from './currency.model';

@Injectable(
    {
        providedIn: "root"
    }
)

export class CurrencyService {

    getCurrencies(): Currency[] {
        return [
            new Currency("Rial", "Iran", 100, new Date()),
            new Currency("Dollar", "USA", 1000, new Date())
        ]
    }
    
}