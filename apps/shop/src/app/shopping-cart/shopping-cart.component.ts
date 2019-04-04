import { Product, ShoppingCart, ShoppingCartItem } from '@angular-business/models';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../cart.service';
@Component({
  selector: 'angular-business-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: ShoppingCart;
  public products: Product[];
  public shoppingCart$: Observable<ShoppingCart>;
  public products$: Observable<Product[]>;
  public totalUnits = 0;
  private subscribing = true;
  private cloningList = false;
  private simulateBackground = true;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  public ngOnInit() {
    this.getServerData();
  }
  private getServerData() {
    if (this.subscribing) {
      this.subscribeToData();
    } else {
      this.getDataObservables();
    }
    if (this.simulateBackground) {
      this.autoBackGroundChange();
    }
  }
  private subscribeToData() {
    this.cartService.getShoppingCart().subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.calculateTotalUnits(shoppingCart);
    });
    this.cartService.getProducts().subscribe(products => (this.products = products));
  }
  private getDataObservables() {
    this.shoppingCart$ = this.cartService.getShoppingCart().pipe(tap(this.calculateTotalUnits));
    this.products$ = this.cartService.getProducts();
  }
  private calculateTotalUnits(shoppingCart: ShoppingCart) {
    if (shoppingCart.items && shoppingCart.items.length) {
      this.totalUnits = shoppingCart.items.map(item => item.quantity).reduce((accumalated, current) => accumalated + current);
    }
  }
  private autoBackGroundChange() {
    const timeout = 5000;
    setTimeout(() => {
      this.addToCart({ product: this.products[0], quantity: 1 });
      console.log(this.shoppingCart);
      this.cdr.detectChanges();
    }, timeout);
  }

  public addToCart(item: ShoppingCartItem) {
    if (this.cloningList) {
      this.shoppingCart.items.push({ ...item });
    } else {
      this.shoppingCart.items = [...this.shoppingCart.items, { ...item }];
    }
    this.totalUnits += item.quantity;
  }

  public removeFromCart(item: ShoppingCartItem) {
    this.shoppingCart.items = this.shoppingCart.items.filter(i => i.product._id !== item.product._id);
    this.totalUnits -= item.quantity;
  }

  public postShoppingCart() {
    if (this.subscribing) {
      this.postDataAndSubscribe();
    } else {
      this.postDataAndGetObservable();
    }
  }
  private postDataAndSubscribe() {
    this.cartService
      .postShoppingCart(this.shoppingCart)
      .subscribe(shoppingCartSaved => (this.shoppingCart = shoppingCartSaved));
  }
  private postDataAndGetObservable() {
    this.shoppingCart$ = this.cartService.postShoppingCart(this.shoppingCart);
  }
}
