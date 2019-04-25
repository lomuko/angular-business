import { ShoppingCart } from '@angular-business/models';
import { RouterReducerState } from '@ngrx/router-store';

export interface RootState {
  router: RouterReducerState<any>;
  shoppingCart: ShoppingCart;
}
