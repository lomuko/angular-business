import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootState } from '../../store/root.state';
import { shoppingCartItemsCount } from '../../store/shoppingCart.state';

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
}
