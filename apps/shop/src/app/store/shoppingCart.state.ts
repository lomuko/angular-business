import { ShoppingCart } from '@angular-business/models';
import { createSelector } from '@ngrx/store';
import { RootState } from './root.state';

export const initialState: ShoppingCart = { _id: '', items: [], client: '', status: '' };

const shoppingCart = (state: RootState) => state.shoppingCart;

export const shoppingCartItems = createSelector(
  shoppingCart,
  (state: ShoppingCart) => state.items
);

export const shoppingCartItemsCount = createSelector(
  shoppingCart,
  (state: ShoppingCart) => state.items.length
);
