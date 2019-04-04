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
  public changeConfig = {
    simulateBackground: true,
    useAsync: false,
    useCDR: false,
    cloningList: false
  };

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  public ngOnInit() {
    console.log('changeConfig', this.changeConfig);
    this.getServerData();
    if (this.changeConfig.simulateBackground) {
      this.autoBackGroundRemover();
    }
  }
  private getServerData() {
    if (this.changeConfig.useAsync) {
      this.getDataObservables();
    } else {
      this.subscribeToData();
    }
  }
  private subscribeToData() {
    this.cartService.getShoppingCart().subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.onDataReceived(shoppingCart);
    });
    this.cartService.getProducts().subscribe(products => {
      this.products = products;
      if (this.changeConfig.useCDR) {
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
    console.log(`Received a cart ${JSON.stringify(this.shoppingCart)} `);
    if (this.changeConfig.useCDR) {
      this.cdr.detectChanges();
    }
  }
  private calculateTotalUnits(shoppingCart: ShoppingCart) {
    if (shoppingCart.items && shoppingCart.items.length) {
      this.totalUnits = shoppingCart.items.map(item => item.quantity).reduce((accumalated, current) => accumalated + current);
    } else {
      this.totalUnits = 0;
    }
    console.log(`Now we have ${this.totalUnits} units`);
  }

  public addToCart(item: ShoppingCartItem) {
    if (this.changeConfig.cloningList) {
      this.shoppingCart.items = [...this.shoppingCart.items, { ...item }];
    } else {
      this.shoppingCart.items.push({ ...item });
    }
    console.log(`Added item ${JSON.stringify(item)}`);
    this.calculateTotalUnits(this.shoppingCart);
  }

  public removeFromCart(item: ShoppingCartItem) {
    if (this.changeConfig.cloningList) {
      this.shoppingCart.items = this.shoppingCart.items.filter(i => i.product._id !== item.product._id);
    } else {
      this.shoppingCart.items.forEach((i, index) => {
        if (i.product._id === item.product._id) this.shoppingCart.items.splice(index, 1);
      });
    }
    console.log(`Removed item  ${JSON.stringify(item)}`);
    this.calculateTotalUnits(this.shoppingCart);
  }
  private autoBackGroundRemover(): any {
    const timeout = 10000;
    setTimeout(() => {
      if (this.shoppingCart.items[0]) {
        const item = this.shoppingCart.items[0];
        console.log(`Auto removing item ${JSON.stringify(item)} `);
        this.removeFromCart(item);
        // if (this.useCDR) {
        //   this.cdr.detectChanges();
        // }
      }
    }, timeout);
  }
  public postShoppingCart() {
    if (this.changeConfig.useAsync) {
      this.postDataAndGetObservable();
    } else {
      this.postDataAndSubscribe();
    }
  }
  private postDataAndSubscribe() {
    this.cartService.postShoppingCart(this.shoppingCart).subscribe(shoppingCartSaved => {
      this.shoppingCart = shoppingCartSaved;
      if (this.changeConfig.useCDR) {
        this.cdr.detectChanges();
      }
    });
  }
  private postDataAndGetObservable() {
    this.shoppingCart$ = this.cartService.postShoppingCart(this.shoppingCart);
  }
}
