import { Routes } from '@angular/router';
import { CurrencyListComponent } from './currency-list/currency-list.component';

export const CURRENCY_ROUTES : Routes = [
  {
    path: '', component: CurrencyListComponent
  }
]
