import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyAddComponent } from './currency-add/currency-add.component';

@NgModule({
  declarations: [CurrencyListComponent, CurrencyAddComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    FormsModule
  ]
})

export class CurrencyModule { }
