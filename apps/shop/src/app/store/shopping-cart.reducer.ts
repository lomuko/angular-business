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
  on(shoppingCartErrorLoading, onApiError),
  on(shoppingCartSaved, onShoppingCartSaved),
  on(shoppingCartErrorSaving, onApiError)
);

function onAddShoppingCartItem(state: ShoppingCart, { newShoppingCartItem }) {
  return { ...state, items: [...state.items, newShoppingCartItem] };
}

function onShoppingCartLoaded(state: ShoppingCart, { loadedShoppingCart }) {
  return loadedShoppingCart;
}

function onShoppingCartSaved(state: ShoppingCart, { savedShoppingCart }) {
  return savedShoppingCart;
}

function onApiError(state: ShoppingCart, { error }) {
  return { ...state, error: error };
}
