import { ShoppingCartItem } from './shopping-cart-item.interface';

export interface ShoppingCart {
  _id: string;
  items: ShoppingCartItem[];
  client: string;
  status: string;
  error?: string;
}
