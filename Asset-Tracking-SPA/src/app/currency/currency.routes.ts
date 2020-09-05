import { Routes } from '@angular/router';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyAddComponent } from './currency-add/currency-add.component';

export const CURRENCY_ROUTES : Routes = [
  {
    path: '', component: CurrencyListComponent
  },
  {
    path: 'add', component: CurrencyAddComponent
  }
]
