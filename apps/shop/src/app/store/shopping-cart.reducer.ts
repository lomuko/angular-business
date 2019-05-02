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

export function shoppingCartReducer(state: ShoppingCart, action) {
  switch (action.type) {
    case addShoppingCartItem.type:
      return { ...state, items: [...state.items, action.newShoppingCartItem] };
    case shoppingCartLoaded.type:
      return action.loadedShoppingCart;
    case shoppingCartErrorLoading.type:
      return { ...state, error: action.error };
    case shoppingCartSaved.type:
      return action.savedShoppingCart;
    case shoppingCartErrorSaving.type:
      return { ...state, error: action.error };
    default:
      break;
  }
}

export const shoppingCartReducer_OLD = createReducer(
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
