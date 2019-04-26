import { ShoppingCart, ShoppingCartItem } from '@angular-business/models';
import { createAction, props } from '@ngrx/store';

export const addShoppingCartItem = createAction(
  '[Product Catalog] Add to Shopping Cart',
  props<{ newShoppingCartItem: ShoppingCartItem }>()
);

export const loadShoppingCart = createAction(
  '[Application Start] Load Shopping Cart',
  props<{}>()
);

export const shoppingCartLoaded = createAction(
  '[ShoppingCart Effects] Shopping Cart Loaded',
  props<{ loadedShoppingCart: ShoppingCart }>()
);

export const shoppingCartErrorLoading = createAction(
  '[ShoppingCart Effects] Shopping Cart Error Loading',
  props<{ error: string }>()
);

export const saveShoppingCart = createAction(
  '[Navigation Section] Save Shopping Cart',
  props<{ shoppingCartToSave: ShoppingCart }>()
);

export const shoppingCartSaved = createAction(
  '[ShoppingCart Effects] Shopping Cart Saved',
  props<{ savedShoppingCart: ShoppingCart }>()
);

export const shoppingCartErrorSaving = createAction(
  '[ShoppingCart Effects] Shopping Cart Error Saving',
  props<{ error: string }>()
);
