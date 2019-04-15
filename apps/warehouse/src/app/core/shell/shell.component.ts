import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OutOfStockStoreService } from '../out-of-stock-store.service';

@Component({
  selector: 'angular-business-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  public numberOfProductsOutOfStock$: Observable<number>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private outOfStockStoreService: OutOfStockStoreService
  ) {
    this.numberOfProductsOutOfStock$ = this.outOfStockStoreService
      .select$()
      .pipe(map(state => state.products.length));
  }
}
