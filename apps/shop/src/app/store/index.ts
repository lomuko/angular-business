import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RootState } from './root.state';
import { shoppingCartReducer } from './shopping-cart.reducer';

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  shoppingCart: shoppingCartReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];

// https://github.com/manfredsteyer/ENT_03_2019/blob/ngrx-creators/projects/flight-app/src/app/flight-booking/%2Bstate/flight-booking-facade.ts
