import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule' }
];
