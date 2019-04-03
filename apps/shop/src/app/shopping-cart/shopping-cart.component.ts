import { Product, ShoppingCart } from '@angular-business/models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'angular-business-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: []
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: ShoppingCart;
  public products: Product[];
  public shoppingCart$: Observable<ShoppingCart>;
  public products$: Observable<Product[]>;
  private subscribing = true;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    if (this.subscribing) {
      this.subscribeToData();
    } else {
      this.getDataObservables();
    }
  }

  private subscribeToData() {
    this.cartService.getShoppingCart().subscribe(shoppingCart => (this.shoppingCart = shoppingCart));
    this.cartService.getProducts().subscribe(products => (this.products = products));
  }

  private getDataObservables() {
    this.shoppingCart$ = this.cartService.getShoppingCart();
    this.products$ = this.cartService.getProducts();
  }

  public postShoppingCart(shoppingCart: ShoppingCart) {
    if (this.subscribing) {
      this.postDataAndSubscribe(shoppingCart);
    } else {
      this.postDataAndGetObservable(shoppingCart);
    }
  }

  private postDataAndSubscribe(shoppingCart: ShoppingCart) {
    this.cartService.postShoppingCart(shoppingCart).subscribe(shoppingCartSaved => (this.shoppingCart = shoppingCartSaved));
  }
  private postDataAndGetObservable(shoppingCart: ShoppingCart) {
    this.shoppingCart$ = this.cartService.postShoppingCart(shoppingCart);
  }
}
