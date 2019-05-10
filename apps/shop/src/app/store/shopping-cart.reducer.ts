import { ShoppingCart } from '@angular-business/models';
import { Action, createReducer, on } from '@ngrx/store';
import {
  addShoppingCartItem,
  shoppingCartErrorLoading,
  shoppingCartErrorSaving,
  shoppingCartLoaded,
  shoppingCartSaved
} from './shopping-cart.actions';
import { initialState } from './shoppingCart.state';

const reducer = createReducer(
  initialState,
  on(addShoppingCartItem, onAddShoppingCartItem),
  on(shoppingCartLoaded, onShoppingCartLoaded),
  on(shoppingCartErrorLoading, onApiError),
  on(shoppingCartSaved, onShoppingCartSaved),
  on(shoppingCartErrorSaving, onApiError)
);

export function shoppingCartReducer(state: ShoppingCart | undefined, action: Action) {
  return reducer(state, action);
}

function onAddShoppingCartItem(state: ShoppingCart, { payload }) {
  return { ...state, items: [...state.items, payload] };
}

function onShoppingCartLoaded(state: ShoppingCart, { payload }) {
  return payload;
}

function onShoppingCartSaved(state: ShoppingCart, { payload }) {
  return payload;
}

function onApiError(state: ShoppingCart, { payload }) {
  return { ...state, error: payload };
}
