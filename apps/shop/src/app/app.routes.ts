import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule' }
];
