import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-business-cart-alfa',
  templateUrl: './cart-alfa.component.html',
  styles: []
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