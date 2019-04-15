import { Product } from '@angular-business/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface OutOfStock {
  products: Product[];
}
export const OutOfStock_Initial_State: OutOfStock = { products: [] };

export interface ImAction {
  type: string;
  payload: any;
}
export class AddOoSProduct implements ImAction {
  public readonly type = 'Add Out of Stock Product';
  constructor(public readonly payload: Product) {}
}
export class RemoveOoSProduct implements ImAction {
  public readonly type = 'Remove Out of Stock Product';
  constructor(public readonly payload: Product) {}
}

function reducer(state: OutOfStock = OutOfStock_Initial_State, action: ImAction): OutOfStock {
  const result = { ...state };
  switch (action.type) {
    case 'Add Out of Stock Product':
      result.products = [...result.products, action.payload];
      break;
    case 'Remove Out of Stock Product':
      result.products = result.products.filter(p => p._id !== action.payload._id);
      break;
    default:
      break;
  }
  return result;
}

@Injectable({
  providedIn: 'root'
})
export class OutOfStockStoreService {
  private state: OutOfStock = OutOfStock_Initial_State;
  private state$: BehaviorSubject<OutOfStock> = new BehaviorSubject({ ...this.state });

  constructor() {}

  public select$(): Observable<OutOfStock> {
    return this.state$.asObservable();
  }

  public dispatch(action: ImAction) {
    this.state = reducer(this.state, action);
    this.state$.next({ ...this.state });
  }
}
