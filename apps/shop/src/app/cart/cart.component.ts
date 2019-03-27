import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../../../libs/models/src';

@Component({
  selector: 'angular-business-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public shoppingCart: ShoppingCart;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<ShoppingCart>('api/shopping-cart').subscribe(shoppingCart => (this.shoppingCart = shoppingCart));
  }
}
