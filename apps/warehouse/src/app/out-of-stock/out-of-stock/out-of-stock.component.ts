import { Product } from '@angular-business/models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiProductsService } from '../../core/api-products.service';
import { OutOfStockStoreService, RemoveOoSProduct } from '../../core/out-of-stock-store.service';

@Component({
  selector: 'angular-business-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styles: []
})
export class OutOfStockComponent implements OnInit {
  public productsOutOfStock$: Observable<Product[]>;
  constructor(private outOfStockStoreService: OutOfStockStoreService, private apiProductsService: ApiProductsService) {}

  public ngOnInit() {
    this.productsOutOfStock$ = this.outOfStockStoreService.select$().pipe(map(store => store.products));
    this.apiProductsService.getProducts$().subscribe();
  }
  public refill(product: Product) {
    product.stock = environment.minimalStock + 1;
    this.apiProductsService.putProduct$(product).subscribe(() => {
      const removeOutOfStockAction = new RemoveOoSProduct(product);
      this.outOfStockStoreService.dispatch(removeOutOfStockAction);
    });
  }
}
