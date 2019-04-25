import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RootState } from './RootState';
import { shoppingCartReducer } from './shopping-cart.reducer';

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  shoppingCart: shoppingCartReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
