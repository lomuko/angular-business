import { ShoppingCart } from '@angular-business/models';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get()
  getShoppingCart(): ShoppingCart {
    return this.shoppingCartService.getShoppingCart();
  }

  @Post()
  setShoppingCart(@Body() shoppingCart: ShoppingCart) {
    return this.shoppingCartService.setShoppingCart(shoppingCart);
  }

  @Delete()
  @Get('clear')
  clearShoppingCart(): ShoppingCart {
    return this.shoppingCartService.clearShoppingCart();
  }
}
