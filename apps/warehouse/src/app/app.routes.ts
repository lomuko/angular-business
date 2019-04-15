import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'out-of-stock', loadChildren: './out-of-stock/out-of-stock.module#OutOfStockModule' }
];
