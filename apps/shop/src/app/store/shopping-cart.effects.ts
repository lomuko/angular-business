import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CartService } from '../cart.service';
import {
  addShoppingCartItem,
  loadShoppingCart,
  saveShoppingCart,
  shoppingCartErrorLoading,
  shoppingCartErrorSaving,
  shoppingCartLoaded,
  shoppingCartSaved
} from './shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {
  public logAddProduct_Inline$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addShoppingCartItem),
        tap(action => console.log('action:', action))
      ),
    { dispatch: false }
  );

  public logAddProduct$ = createEffect(this.logAddProductAction.bind(this), {
    dispatch: false
  });

  public loadShoppingCart$ = createEffect(this.loadShoppingCart.bind(this));
  public saveShoppingCart$ = createEffect(this.saveShoppingCart.bind(this));

  constructor(private actions$: Actions, private cartService: CartService) {}

  private logAddProductAction() {
    return this.actions$.pipe(
      ofType(addShoppingCartItem),
      tap(action => console.log('action_Inline:', action))
    );
  }

  private loadShoppingCart() {
    return this.actions$.pipe(
      ofType(loadShoppingCart),
      switchMap(() =>
        this.cartService.getShoppingCart().pipe(
          map(loadedShoopingCart => shoppingCartLoaded({ payload: loadedShoopingCart })),
          catchError(error => of(shoppingCartErrorLoading({ payload: error.message })))
        )
      )
    );
  }

  private saveShoppingCart() {
    return this.actions$.pipe(
      ofType(saveShoppingCart),
      switchMap(action =>
        this.cartService.postShoppingCart(action.payload).pipe(
          map(savedShoppingCart => shoppingCartSaved({ payload: savedShoppingCart })),
          catchError(error => of(shoppingCartErrorSaving({ payload: error.message })))
        )
      )
    );
  }
}
