import { Product } from '@angular-business/models';
import { Body, Controller, Get, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getData(): Product[] {
    return this.productsService.getProducts();
  }

  @Put()
  putData(@Body() product: Product): Product {
    return this.productsService.putProduct(product);
  }
}
