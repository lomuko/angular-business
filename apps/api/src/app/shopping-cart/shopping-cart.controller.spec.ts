import { shoppingCartMock } from '@angular-business/models';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCart Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    const shoppingCartServiceMock = {
      getShoppingCart: jest.fn(),
      setShoppingCart: jest.fn()
    };
    shoppingCartServiceMock.getShoppingCart.mockReturnValueOnce(of(shoppingCartMock));
    shoppingCartServiceMock.setShoppingCart.mockReturnValueOnce(of(shoppingCartMock));
    module = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      providers: [{ provide: ShoppingCartService, useValue: shoppingCartServiceMock }]
    }).compile();
  });
  it('should be defined', () => {
    const controller: ShoppingCartController = module.get<ShoppingCartController>(ShoppingCartController);
    expect(controller).toBeDefined();
  });
});
