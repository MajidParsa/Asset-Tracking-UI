import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Currency } from './currency.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: "root"
    }
)

export class CurrencyService {

  constructor (private http : HttpClient)
  {

  }

    getCurrencies() : Observable<Currency[]> {

      return this.http.get<Currency[]>(environment.currencyApiUrl + "/api/Currency/getCurrencies");

        // return [
        //     new Currency("Rial", "Iran", 100, new Date()),
        //     new Currency("Dollar", "USA", 1000, new Date())
        // ]
    }

}
