import { Injectable } from '@nestjs/common';
import { ShoppingCart } from '../../../../../libs/models/src';

@Injectable()
export class ShoppingCartService {

  private shoppingCart: ShoppingCart;

  getShoppingCart(): ShoppingCart {
    if (!this.shoppingCart) {
      this.shoppingCart = {
        _id: 'aRandomIdentificator',
        items: [],
        client: '',
        status: `created at ${new Date().toISOString()}`
      };
    }
    return this.shoppingCart;
  }

  setShoppingCart(shoppingCart: ShoppingCart) {
    this.shoppingCart = shoppingCart;
    this.shoppingCart.status = `updated at ${new Date().toISOString()}`;
    return this.shoppingCart;
  }

  clearShoppingCart(): null {
    this.shoppingCart = null;
    return null;
  }
}
