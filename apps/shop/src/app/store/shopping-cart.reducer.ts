import { ShoppingCart } from '@angular-business/models';
import { createReducer, on } from '@ngrx/store';
import { addShoppingCartItem } from './shopping-cart.actions';

export const initialState: ShoppingCart = { _id: '', items: [], client: '', status: '' };

export const shoppingCartReducer = createReducer(
  initialState,
  on(addShoppingCartItem, onAddShoppingCartItem)
);

function onAddShoppingCartItem(state: ShoppingCart, { payload }) {
  return { ...state, items: [...state.items, payload] };
}
