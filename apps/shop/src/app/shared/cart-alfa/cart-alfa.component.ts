import { Categories, Product, ShoppingCart, ShoppingCartItem } from '@angular-business/models';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-business-cart-alfa',
  templateUrl: './cart-alfa.component.html',
  styles: [
    `
      .full-width {
        width: 100%;
      }
      .shoping-cart-card {
        min-width: 120px;
        margin: 20px auto;
      }
      .row {
        display: flex;
        flex-direction: row;
      }
      .col {
        flex: 1;
        margin-right: 20px;
      }
      .col:last-child {
        margin-right: 0;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CartAlfaComponent implements OnInit {
  @Input() public shoppingCart: ShoppingCart;
  @Input() public products: Product[];
  @Output() public saveShoppingCart: EventEmitter<ShoppingCart> = new EventEmitter<ShoppingCart>();
  public totalUnits = 0;
  public item: ShoppingCartItem;

  constructor() {}

  public ngOnInit() {
    this.resetItem();
    this.totalUnits = this.shoppingCart.items
      .map(item => item.quantity)
      .reduce((accumalated, current) => accumalated + current);
  }
  private resetProduct() {
    return { _id: '', description: '', category: Categories.Computer, brand: '', price: 0, stock: 0 };
  }
  private resetItem() {
    this.item = { product: this.resetProduct(), quantity: 0 };
  }
  public addToCart() {
    this.shoppingCart.items.push({ ...this.item });
    this.totalUnits += this.item.quantity;
    this.resetItem();
  }
  public removeFromCart(item: ShoppingCartItem) {
    this.shoppingCart.items = this.shoppingCart.items.filter(i => i.product._id !== item.product._id);
    this.totalUnits -= item.quantity;
  }
}
