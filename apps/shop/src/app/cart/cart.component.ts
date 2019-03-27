import { ShoppingCart } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-business-cart',
  templateUrl: './cart.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CartComponent implements OnInit {
  public shoppingCart: ShoppingCart;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<ShoppingCart>('api/shopping-cart').subscribe(shoppingCart => (this.shoppingCart = shoppingCart));
  }

  public postShoppingCart(shoppingCart: ShoppingCart) {
    this.httpClient
      .post<ShoppingCart>('api/shopping-cart', shoppingCart)
      .subscribe(shoppingCartSaved => (this.shoppingCart = shoppingCartSaved));
  }
}
