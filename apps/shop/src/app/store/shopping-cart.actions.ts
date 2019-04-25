import { ShoppingCartItem } from '@angular-business/models';
import { createAction, props } from '@ngrx/store';

export const addShoppingCartItem = createAction(
  '[Product Catalog] Add to Shopping Cart',
  props<{ payload: ShoppingCartItem }>()
);
