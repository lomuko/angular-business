import { ShoppingCart } from '@angular-business/models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RootState } from '../../store/root.state';
import { loadShoppingCart, saveShoppingCart } from '../../store/shopping-cart.actions';
import {
  shoppingCartError,
  shoppingCartFeature,
  shoppingCartItemsCount
} from '../../store/shoppingCart.state';

@Component({
  selector: 'angular-business-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  public shoppingCartItemsCount$: Observable<number>;
  public shoppingCartError$: Observable<string>;

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<RootState>) {
    this.loadShoppingCart();
    this.shoppingCartItemsCount$ = this.store.pipe(select(shoppingCartItemsCount));
    this.shoppingCartError$ = this.store.pipe(select(shoppingCartError));
  }

  public loadShoppingCart() {
    const action = loadShoppingCart({});
    this.store.dispatch(action);
  }

  public saveShoppingCart() {
    this.getCurrentShoppingCart$().subscribe(current => this.saveCurrentShoppingCart(current));
  }

  private getCurrentShoppingCart$() {
    return this.store.pipe(
      select(shoppingCartFeature),
      take(1)
    );
  }

  private saveCurrentShoppingCart(current: ShoppingCart) {
    const action = saveShoppingCart({ shoppingCartToSave: current });
    this.store.dispatch(action);
  }
}
