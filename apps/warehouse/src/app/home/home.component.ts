import { Card, Product } from '@angular-business/models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsService } from '../core/products.service';

@Component({
  selector: 'angular-business-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards: Observable<Card[]>;

  constructor(private productsService: ProductsService) {}

  public ngOnInit() {
    this.cards = this.productsService.getProducts$().pipe(
      map(products => {
        return products.map(product => {
          return {
            title: product.description,
            subtitle: `${product.brand} - ${product.category}`,
            item: product,
            cols: 1,
            rows: 1
          };
        });
      })
    );
  }
  public refillProduct(product: Product) {
    this.productsService.refill(product);
  }
}
