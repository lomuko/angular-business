import { ShoppingCart } from '@angular-business/models';
import { createSelector } from '@ngrx/store';
import { RootState } from './root.state';

export const initialState: ShoppingCart = { _id: '', items: [], client: '', status: '' };

export const shoppingCartFeature = (state: RootState) => state.shoppingCart;

export const shoppingCartItems = createSelector(
  shoppingCartFeature,
  (state: ShoppingCart) => state.items
);

export const shoppingCartItemsCount = createSelector(
  shoppingCartFeature,
  (state: ShoppingCart) => state.items.length
);

export const shoppingCartError = createSelector(
  shoppingCartFeature,
  (state: ShoppingCart) => state.error
);
