# functional

## 0-nx

### Angular Material

```terminal
ng add @angular/material  --project=shop
@import '~@angular/material/prebuilt-themes/pink-bluegrey.css';
ng generate @schematics/angular:module core --project=shop
ng generate @angular/material:nav core/shell --project=shop --inlineStyle --module=core/core.module.ts --export
ng generate @schematics/angular:module home --project=shop --routing
ng generate @angular/material:dashboard home --project=shop --inlineStyle --module=home/home.module.ts
ng generate @schematics/angular:module shared --project=shop
ng add @angular/material --project=warehouse
@import '~@angular/material/prebuilt-themes/purple-green.css';
ng generate @schematics/angular:module core --project=warehouse
ng generate @angular/material:nav core/shell --project=warehouse --inlineStyle --module=core/core.module.ts --export
ng generate @schematics/angular:module home --project=warehouse --routing
ng generate @angular/material:dashboard home --project=warehouse --inlineStyle --module=home/home.module.ts
ng generate @schematics/angular:module shared --project=warehouse
```

### Api

```terminal
ng generate @nestjs/schematics:module products
ng generate @nestjs/schematics:controller products
ng generate @nestjs/schematics:service products
```

```typescript
@Module({ controllers: [ProductsController], providers: [ProductsService] })
export class ProductsModule {}
```

```typescript
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getData(): Product[] {
    return this.productsService.getProducts();
  }
}
```

```typescript
const PRODUCTS: Product[] = [
  {
    _id: 'A-1',
    description: 'iMac',
    category: Categories.Computer,
    brand: 'Apple',
    price: 3000,
    stock: 10
  },
  {
    _id: 'MS-2',
    description: 'Surface',
    category: Categories.Computer,
    brand: 'Microsoft',
    price: 1500,
    stock: 20
  },
  {
    _id: 'HP-3',
    description: 'Hp Deskjet',
    category: Categories.Printer,
    brand: 'HP',
    price: 500,
    stock: 50
  },
  {
    _id: 'HP-4',
    description: 'Pavillion',
    category: Categories.Computer,
    brand: 'HP',
    price: 1000,
    stock: 20
  },
  {
    _id: 'C-5',
    description: 'Selphy',
    category: Categories.Printer,
    brand: 'Canon',
    price: 200,
    stock: 50
  }
];

@Injectable()
export class ProductsService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
```

### Models

```typescript
export enum Categories {
  Computer = 'Computer',
  Printer = 'Printer'
}
export interface Product {
  _id: string;
  description: string;
  category: Categories;
  brand: string;
  price: number;
  stock: number;
}
```

```typescript
export interface Card {
  title: string;
  subtitle: string;
  content: string;
  actions: string[];
  cols: number;
  rows: number;
}
```

### Views

```html
<mat-card class="dashboard-card">
  <mat-card-header>
    <mat-card-title>
      {{card.title}}
    </mat-card-title>
    <mat-card-subtitle>
      {{card.subtitle}}
    </mat-card-subtitle>
  </mat-card-header>
  <mat-card-content class="dashboard-card-content">
    {{ card.content }}
    <mat-card-actions>
      <button mat-button
              color="warn"
              *ngFor="let action of card.actions"> {{ action }}</button>
    </mat-card-actions>
  </mat-card-content>
</mat-card>
```

```typescript
@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ViewsModule {}
```

```typescript
export class ProductComponent implements OnInit {
  @Input() public card: Card;
  constructor() {}

  ngOnInit() {}
}
```

### Shop - Warehouse

```typescript
const routes: Routes = [{ path: '', loadChildren: './home/home.module#HomeModule' }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```typescript
@NgModule({
  declarations: [],
  imports: [CommonModule, ViewsModule],
  exports: [ViewsModule]
})
export class SharedModule {}
```

```typescript
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatGridListModule, LayoutModule, SharedModule]
})
export class HomeModule {}
```

```html
<div class="grid-container">
  <h1 class="mat-h1">Product List</h1>
  <mat-grid-list cols="2"
                 rowHeight="200px">
    <mat-grid-tile *ngFor="let card of cards | async"
                   [colspan]="card.cols"
                   [rowspan]="card.rows">
      <angular-business-product [card]="card">
      </angular-business-product>
    </mat-grid-tile>
  </mat-grid-list>
</div>
```

```typescript
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
            // content: `Current stock : ${product.stock} - Current price : ${product.price}`,
            // actions: [`Add more stock`],
            cols: 1,
            rows: 1
          };
        });
      })
    );
  }
}
```