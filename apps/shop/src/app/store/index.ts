import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RootState } from './RootState';

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
