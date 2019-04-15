import { Product } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AddOoSProduct, OutOfStockStoreService } from './out-of-stock-store.service';
@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  private minimalStock = 10;
  constructor(private httpClient: HttpClient, private outOfStockStoreService: OutOfStockStoreService) {}
  public getProducts$() {
    return this.httpClient.get<Product[]>('api/products').pipe(
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
}
