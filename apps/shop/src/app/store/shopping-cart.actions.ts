import { ShoppingCart, ShoppingCartItem } from '@angular-business/models';
import { createAction, props } from '@ngrx/store';

export const addShoppingCartItem = createAction(
  '[Product Catalog] Add to Shopping Cart',
  props<{ payload: ShoppingCartItem }>()
);

export const loadShoppingCart = createAction(
  '[Application Start] Load Shopping Cart',
  props<{}>()
);

export const shoppingCartLoaded = createAction(
  '[ShoppingCart Effects] Shopping Cart Loaded',
  props<{ payload: ShoppingCart }>()
);

export const shoppingCartErrorLoading = createAction(
  '[ShoppingCart Effects] Shopping Cart Error Loading',
  props<{ payload: string }>()
);

export const saveShoppingCart = createAction(
  '[Navigation Section] Save Shopping Cart',
  props<{ payload: ShoppingCart }>()
);

export const shoppingCartSaved = createAction(
  '[ShoppingCart Effects] Shopping Cart Saved',
  props<{ payload: ShoppingCart }>()
);

export const shoppingCartErrorSaving = createAction(
  '[ShoppingCart Effects] Shopping Cart Error Saving',
  props<{ payload: string }>()
);
