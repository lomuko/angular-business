import { Component, OnInit } from '@angular/core';

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
  public item: Item;
  public cart: Cart = { items: [] };

  constructor() {}

  public ngOnInit() {
    this.resetItem();
  }
  public resetItem() {
    this.item = { product: '', quantity: 0 };
  }
  public addToCart() {
    const item = { ...this.item };
    this.cart.items.push(item);
    this.totalUnits += item.quantity;
    this.resetItem();
  }
}

export interface Item {
  product: any;
  quantity: number;
}

export interface Cart {
  items: Item[];
}
