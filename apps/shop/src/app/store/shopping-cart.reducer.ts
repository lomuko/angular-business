import { ShoppingCart } from '@angular-business/models';
import { createReducer, on } from '@ngrx/store';
import { addShoppingCartItem, shoppingCartSaved } from './shopping-cart.actions';
import { initialState } from './shoppingCart.state';

export const shoppingCartReducer = createReducer(
  initialState,
  on(addShoppingCartItem, onAddShoppingCartItem),
  on(shoppingCartSaved, onShoppingCartSaved)
);

function onAddShoppingCartItem(state: ShoppingCart, { payload }) {
  return { ...state, items: [...state.items, payload] };
}

function onShoppingCartSaved(state: ShoppingCart, { payload }) {
  return payload;
}
