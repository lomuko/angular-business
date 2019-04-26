import { ShoppingCart } from '@angular-business/models';
import { createReducer, on } from '@ngrx/store';
import {
  addShoppingCartItem,
  shoppingCartErrorLoading,
  shoppingCartErrorSaving,
  shoppingCartLoaded,
  shoppingCartSaved
} from './shopping-cart.actions';
import { initialState } from './shoppingCart.state';

export const shoppingCartReducer = createReducer(
  initialState,
  on(addShoppingCartItem, onAddShoppingCartItem),
  on(shoppingCartLoaded, onShoppingCartLoaded),
  on(shoppingCartSaved, onShoppingCartSaved),
  on(shoppingCartErrorLoading, onApiError),
  on(shoppingCartErrorSaving, onApiError)
);

function onAddShoppingCartItem(state: ShoppingCart, { payload }) {
  return { ...state, items: [...state.items, payload] };
}

function onShoppingCartSaved(state: ShoppingCart, { shoppingCart }) {
  return shoppingCart;
}

function onShoppingCartLoaded(state: ShoppingCart, { shoppingCart }) {
  return shoppingCart;
}

function onApiError(state: ShoppingCart, { error }) {
  return { ...state, error: error };
}
