import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RootState } from '../../store/root.state';
import { loadShoppingCart, saveShoppingCart } from '../../store/shopping-cart.actions';
import {
  shoppingCart,
  shoppingCartError,
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
    const action = loadShoppingCart({});
    this.store.dispatch(action);
    this.shoppingCartItemsCount$ = this.store.pipe(select(shoppingCartItemsCount));
    this.shoppingCartError$ = this.store.pipe(select(shoppingCartError));
  }

  public saveShoppingCart() {
    this.store
      .pipe(
        select(shoppingCart),
        take(1)
      )
      .subscribe(current => {
        const action = saveShoppingCart({ shoppingCart: current });
        this.store.dispatch(action);
        console.log('Saving', current);
      });
  }
}
