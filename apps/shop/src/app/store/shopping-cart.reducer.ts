import { ShoppingCart } from '@angular-business/models';
import { createReducer, on } from '@ngrx/store';
import { addShoppingCartItem } from './shopping-cart.actions';
import { initialState } from './shoppingCart.state';

export const shoppingCartReducer = createReducer(
  initialState,
  on(addShoppingCartItem, onAddShoppingCartItem)
);

function onAddShoppingCartItem(state: ShoppingCart, { payload }) {
  return { ...state, items: [...state.items, payload] };
}
