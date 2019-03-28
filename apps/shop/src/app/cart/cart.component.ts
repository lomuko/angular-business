import { Product, ShoppingCart } from '@angular-business/models';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'angular-business-cart',
  templateUrl: './cart.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  public shoppingCart: ShoppingCart;
  public products: Product[];
  public shoppingCart$: Observable<ShoppingCart>;
  public products$: Observable<Product[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // this.cartService.getShoppingCart().subscribe(shoppingCart => (this.shoppingCart = shoppingCart));
    // this.cartService.getProducts().subscribe(products => (this.products = products));
    this.shoppingCart$ = this.cartService.getShoppingCart();
    this.products$ = this.cartService.getProducts();
  }
  public postShoppingCart(shoppingCart: ShoppingCart) {
    //this.cartSkervice.postShoppingCart(shoppingCart).subscribe(shoppingCartSaved => (this.shoppingCart = shoppingCartSaved));
    this.shoppingCart$ = this.cartService.postShoppingCart(shoppingCart);
  }
}
