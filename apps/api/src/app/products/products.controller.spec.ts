import { productsMock } from '@angular-business/models';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('Products Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    const productsServiceMock = {
      getProducts: jest.fn()
    };
    productsServiceMock.getProducts.mockReturnValueOnce(of(productsMock));
    module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [{ provide: ProductsService, useValue: productsServiceMock }]
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProductsController = module.get<ProductsController>(ProductsController);
    expect(controller).toBeDefined();
  });
});
