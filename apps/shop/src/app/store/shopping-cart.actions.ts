import { ShoppingCart, ShoppingCartItem } from '@angular-business/models';
import { createAction, props } from '@ngrx/store';

export const addShoppingCartItem = createAction(
  '[Product Catalog] Add to Shopping Cart',
  props<{ payload: ShoppingCartItem }>()
);

export const saveShoppingCart = createAction(
  '[ShoppingCart Effects] Save Shopping Cart',
  props<{ payload: ShoppingCart }>()
);

export const shoppingCartSaved = createAction(
  '[ShoppingCart Effects] Shopping Cart Saved',
  props<{ payload: ShoppingCart }>()
);

export const shoppingCartErrorSaving = createAction(
  '[ShoppingCart Effects] Shopping Cart Error Saved',
  props<{ payload: string }>()
);
