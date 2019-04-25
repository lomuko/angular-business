import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { addShoppingCartItem } from './shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {
  public logAddProduct$ = createEffect(this.logAddProductAction.bind(this), {
    dispatch: false
  });
  public logAddProduct_Inline$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addShoppingCartItem),
        tap(action => console.log('action:', action))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}

  private logAddProductAction() {
    return this.actions$.pipe(
      ofType(addShoppingCartItem),
      tap(action => console.log('action_Inline:', action))
    );
  }
}

//EffectsModule.forRoot([ShoppingCartEffects])
