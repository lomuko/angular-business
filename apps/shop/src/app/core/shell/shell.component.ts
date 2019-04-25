import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RootState } from '../../store/root.state';
import { saveShoppingCart } from '../../store/shopping-cart.actions';
import { shoppingCart, shoppingCartItemsCount } from '../../store/shoppingCart.state';

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

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<RootState>) {
    this.shoppingCartItemsCount$ = this.store.pipe(select(shoppingCartItemsCount));
  }

  public saveShoppingCart() {
    this.store
      .pipe(
        select(shoppingCart),
        take(1)
      )
      .subscribe(current => {
        const action = saveShoppingCart({ payload: current });
        this.store.dispatch(action);
        console.log('Saving', current);
      });
  }
}
