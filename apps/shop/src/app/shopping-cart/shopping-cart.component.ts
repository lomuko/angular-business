import { Product, ShoppingCart, ShoppingCartItem } from '@angular-business/models';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../cart.service';
@Component({
  selector: 'angular-business-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: ShoppingCart;
  public products: Product[];
  public shoppingCart$: Observable<ShoppingCart>;
  public products$: Observable<Product[]>;
  public totalUnits = 0;
  public useAsync = true;
  private cloningList = false;
  private simulateBackground = true;
  private useCDR = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  public ngOnInit() {
    this.getServerData();
  }
  private getServerData() {
    if (this.useAsync) {
      this.getDataObservables();
    } else {
      this.subscribeToData();
    }
    if (this.simulateBackground) {
      this.autoBackGroundChange();
    }
  }
  private subscribeToData() {
    this.cartService.getShoppingCart().subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.onDataReceived(shoppingCart);
    });
    this.cartService.getProducts().subscribe(products => {
      this.products = products;
      if (this.useCDR) {
        this.cdr.detectChanges();
      }
    });
  }
  private getDataObservables() {
    this.shoppingCart$ = this.cartService.getShoppingCart().pipe(
      tap(shoppingCart => (this.shoppingCart = shoppingCart)),
      tap(this.onDataReceived.bind(this))
    );
    this.products$ = this.cartService.getProducts().pipe(tap(products => (this.products = products)));
  }
  private onDataReceived(shoppingCart: ShoppingCart) {
    this.calculateTotalUnits(shoppingCart);
    console.log(`Received a cart with ${this.totalUnits} units`);
    if (this.useCDR) {
      this.cdr.detectChanges();
    }
  }
  private calculateTotalUnits(shoppingCart: ShoppingCart) {
    if (shoppingCart.items && shoppingCart.items.length) {
      this.totalUnits = shoppingCart.items.map(item => item.quantity).reduce((accumalated, current) => accumalated + current);
    } else {
      this.totalUnits = 0;
    }
  }

  private autoBackGroundChange() {
    const timeout = 5000;
    setTimeout(() => {
      this.addToCart({ product: this.products[0], quantity: 8 });
      console.log(`Auto add item. Now we have ${this.totalUnits} units`);
      if (this.useCDR) {
        this.cdr.detectChanges();
      }
    }, timeout);
  }

  public addToCart(item: ShoppingCartItem) {
    if (this.cloningList) {
      this.shoppingCart.items = [...this.shoppingCart.items, { ...item }];
    } else {
      this.shoppingCart.items.push({ ...item });
    }
    this.calculateTotalUnits(this.shoppingCart);
    console.log(`Adding item. Now we have ${this.totalUnits} units`);
  }

  public removeFromCart(item: ShoppingCartItem) {
    if (this.cloningList) {
      this.shoppingCart.items = this.shoppingCart.items.filter(i => i.product._id !== item.product._id);
    } else {
      this.shoppingCart.items.forEach((i, index) => {
        if (i.product._id === item.product._id) this.shoppingCart.items.splice(index, 1);
      });
    }
    this.calculateTotalUnits(this.shoppingCart);
    console.log(`Remove item with product._id: ${item.product._id}. Now we have ${this.totalUnits} units`);
  }

  public postShoppingCart() {
    if (this.useAsync) {
      this.postDataAndGetObservable();
    } else {
      this.postDataAndSubscribe();
    }
  }
  private postDataAndSubscribe() {
    this.cartService.postShoppingCart(this.shoppingCart).subscribe(shoppingCartSaved => {
      this.shoppingCart = shoppingCartSaved;
      if (this.useCDR) {
        this.cdr.detectChanges();
      }
    });
  }
  private postDataAndGetObservable() {
    this.shoppingCart$ = this.cartService.postShoppingCart(this.shoppingCart);
  }
}
