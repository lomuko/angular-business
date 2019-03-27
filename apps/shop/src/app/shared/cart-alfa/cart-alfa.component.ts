import { Categories, Product, ShoppingCart, ShoppingCartItem } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

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
  ]
})
export class CartAlfaComponent implements OnInit {
  public totalUnits = 0;
  public item: ShoppingCartItem;
  @Input() public shoppingCart: ShoppingCart;
  public products: Product[];
  constructor(private httpClient: HttpClient) {}

  public ngOnInit() {
    this.resetItem();
    this.httpClient.get<Product[]>('api/products').subscribe(products => (this.products = products));
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
}
