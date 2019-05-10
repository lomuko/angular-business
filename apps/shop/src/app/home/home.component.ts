import { Card, Product } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootState } from '../store/root.state';
import { addShoppingCartItem } from '../store/shopping-cart.actions';

@Component({
  selector: 'angular-business-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards: Observable<Card[]>;

  constructor(private httpClient: HttpClient, private store: Store<RootState>) {}

  public ngOnInit() {
    this.cards = this.httpClient.get<Product[]>('api/products').pipe(
      map(products => {
        return products.map(product => {
          return {
            title: product.description,
            subtitle: `${product.brand} - ${product.category}`,
            cols: 1,
            rows: 1,
            item: product
          };
        });
      })
    );
  }
  public buyProduct(product: Product) {
    const action = addShoppingCartItem({ payload: { product: product, quantity: 1 } });
    this.store.dispatch(action);
  }
}
