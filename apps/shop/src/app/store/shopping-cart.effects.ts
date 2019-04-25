import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CartService } from '../cart.service';
import {
  addShoppingCartItem,
  saveShoppingCart,
  shoppingCartErrorSaving,
  shoppingCartSaved
} from './shopping-cart.actions';

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
  public saveShoppingCart$ = createEffect(this.saveShoppingCart.bind(this));

  constructor(private actions$: Actions, private cartService: CartService) {}

  private logAddProductAction() {
    return this.actions$.pipe(
      ofType(addShoppingCartItem),
      tap(action => console.log('action_Inline:', action))
    );
  }

  private saveShoppingCart() {
    return this.actions$.pipe(
      ofType(saveShoppingCart),
      switchMap(action =>
        this.cartService
          .postShoppingCart(action.payload)
          .pipe(
            map(
              result => shoppingCartSaved({ payload: result }),
              catchError(error => of(shoppingCartErrorSaving({ payload: error.message })))
            )
          )
      )
    );
  }
}
