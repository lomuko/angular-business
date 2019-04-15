import { Product } from '@angular-business/models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OutOfStockStoreService } from '../../core/out-of-stock-store.service';
import { ProductsService } from '../../core/products.service';

@Component({
  selector: 'angular-business-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styles: []
})
export class OutOfStockComponent implements OnInit {
  public productsOutOfStock$: Observable<Product[]>;
  constructor(
    private outOfStockStoreService: OutOfStockStoreService,
    private productsService: ProductsService
  ) {}

  public ngOnInit() {
    this.productsOutOfStock$ = this.outOfStockStoreService
      .select$()
      .pipe(map(store => store.products));
    this.productsService.getProducts$().subscribe();
  }
  public refill(product: Product) {
    this.productsService.refill(product);
  }
}
