import { Card, Product } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'angular-business-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .grid-container {
        margin: 20px;
      }

      .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }

      .more-button {
        position: absolute;
        top: 5px;
        right: 10px;
      }

      .dashboard-card-content {
        text-align: center;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  public cards: Observable<Card[]>;

  constructor(private httpClient: HttpClient) {}

  public ngOnInit() {
    this.cards = this.httpClient.get<Product[]>('api/products').pipe(
      map(products => {
        return products.map(product => {
          return {
            title: product.description,
            subtitle: `${product.brand} - ${product.category}`,
            content: '',
            actions: [`Buy now for only ${product.price} €`],
            cols: 1,
            rows: 1
          };
        });
      })
    );
  }
}
