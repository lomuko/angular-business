import { Product } from '@angular-business/models';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiProductsService } from './api-products.service';
import {
  AddOoSProduct,
  OutOfStockStoreService,
  RemoveOoSProduct
} from './out-of-stock-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly minimalStock = environment.minimalStock;

  constructor(
    private apiProductsService: ApiProductsService,
    private outOfStockStoreService: OutOfStockStoreService
  ) {}

  public getProducts$() {
    return this.apiProductsService.getProducts$().pipe(
      tap(products => {
        products.forEach(product => {
          if (product.stock <= this.minimalStock) {
            const addOutOfStockAction = new AddOoSProduct(product);
            this.outOfStockStoreService.dispatch(addOutOfStockAction);
          }
        });
      })
    );
  }

  public refill(product: Product) {
    product.stock += environment.minimalStock;
    this.apiProductsService.putProduct$(product).subscribe(() => {
      const removeOutOfStockAction = new RemoveOoSProduct(product);
      this.outOfStockStoreService.dispatch(removeOutOfStockAction);
    });
  }
}
