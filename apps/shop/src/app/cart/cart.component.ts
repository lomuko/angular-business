import { Product, ShoppingCart } from '@angular-business/models';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'angular-business-cart',
  templateUrl: './cart.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CartComponent implements OnInit {
  public shoppingCart: ShoppingCart;
  public products: Product[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getShoppingCart().subscribe(shoppingCart => (this.shoppingCart = shoppingCart));
    this.cartService.getProducts().subscribe(products => (this.products = products));
  }
  public postShoppingCart(shoppingCart: ShoppingCart) {
    this.cartService.postShoppingCart(shoppingCart).subscribe(shoppingCartSaved => (this.shoppingCart = shoppingCartSaved));
  }
}
