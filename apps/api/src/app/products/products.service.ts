import { Product } from '@angular-business/models';
import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './database/products.data';

@Injectable()
export class ProductsService {
  private readonly products = [...PRODUCTS];
  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }

  putProduct(product: Product): Product {
    const productIndex = this.products.findIndex(p => p._id === product._id);
    if (productIndex >= 0) {
      this.products[productIndex] = product;
    }
    return product;
  }
}
