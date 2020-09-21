import { Routes } from '@angular/router';
import { core } from '@angular/compiler';
import { PageNotFoundComponent } from './core';
import { HomeComponent } from './core/home/home.component';

export const APP_ROUTES: Routes = [
    {
      path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'currency', loadChildren: () => import('./currency').then(m => m.CurrencyModule)
    },
    {
      path: '', component: HomeComponent
    },
    {
      path: '**', component: PageNotFoundComponent
    }
  ];
