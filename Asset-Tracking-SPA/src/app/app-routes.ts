import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
      path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'currency', loadChildren: () => import('./currency').then(m => m.CurrencyModule)
    }
  ];
