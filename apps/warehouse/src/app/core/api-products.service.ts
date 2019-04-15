import { Product } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AddOoSProduct, OutOfStockStoreService } from './out-of-stock-store.service';
@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  private readonly minimalStock = environment.minimalStock;
  private readonly url = 'api/products';

  constructor(private httpClient: HttpClient, private outOfStockStoreService: OutOfStockStoreService) {}
  public getProducts$() {
    return this.httpClient.get<Product[]>(this.url).pipe(
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

  public putProduct$(product: Product) {
    return this.httpClient.put(this.url, product);
  }
}
