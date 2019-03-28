import { Product, ShoppingCart } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  public getShoppingCart() {
    return this.httpClient.get<ShoppingCart>('api/shopping-cart');
  }

  public postShoppingCart(shoppingCart: ShoppingCart) {
    return this.httpClient.post<ShoppingCart>('api/shopping-cart', shoppingCart);
  }

  public getProducts() {
    return this.httpClient.get<Product[]>('api/products');
  }
}
