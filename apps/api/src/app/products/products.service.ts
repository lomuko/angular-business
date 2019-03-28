import { Product } from '@angular-business/models';
import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './database/products.data';

@Injectable()
export class ProductsService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
