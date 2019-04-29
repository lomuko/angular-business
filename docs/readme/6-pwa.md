title: 6-PWA
class: animation-fade
layout: true

.bottom-bar[
{{title}}
]

---

class: impact

# {{title}}

## Redux con NgRx

---

    # 1. Angular Service Worker con el CLI
    # 2. Configuración de caché
    # 3. Actualizaciones y notificaciones
    # 4. Shell


---



class: impact

# 1 Angular Service Worker con el CLI

## Instalación
## Modificaciones automáticas
## Paquetes recomendados

---

## 1.1 Instalación de de PWA

```terminal
ng add @angular/pwa --project warehouse
 "@angular/service-worker": "^7.2.12",
```

---

## 1.2 Modificaciones automáticas

### angular json
```typescript
architect.build.options.assetes: [..."apps/warehouse/src/manifest.json"]
architect.configuration.production.serviceWorker: true
architect.configuration.production.ngswConfigPath: "apps/warehouse/ngsw-config.json"
```

--

### index.html
```html
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#1976d2">
  <noscript>Please enable JavaScript to continue using this application.</noscript>
```

--

app.module.ts
```typescript
ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
```

### otros
- ngsw-config.json
- manifest.json
- /assets/icons
---

## 1.3 Paquetes recomendados

```
yarn add -D ngx-pwa-icons
/warehouse/icon.png
yarn ngx-pwa-icons
yarn add -D angular-http-server
"angular-http-server": "angular-http-server"
angular-http-server --open -p 9000 --path ./dist/apps/warehouse
```

//https://medium.com/poka-techblog/turn-your-angular-app-into-a-pwa-in-4-easy-steps-543510a9b626


---

> Recap:

# 1 Angular Service Worker con el CLI

## Instalación
## Modificaciones automáticas
## Paquetes recomendados

---

class: impact

# 2 Configuración de caché

## Assets
## API

---

```yaml
As a: system-operator,
  I want: receive less requests
  so that: servers perform better with less cost

As: user,
  I want to: make the most of my equipment
  so that: use less my internet connection

As: user,
  I want: a fluid interface
  so that: I can be more productive

As: user,
  I want: to see some data offline
  so that: I don't have to be concerned about my connection

```

---

## Assets

```typescript

```

---

## API

```typescript
 // "dataGroups": [
  //   {
  //     "name": "cache-first",
  //     "urls": ["http://localhost:3333/api"],
  //     "cacheConfig": {
  //       "strategy": "performance",
  //       "maxSize": 10,
  //       "maxAge": "1d"
  //     }
  //   },
  //   {
  //     "name": "api-first",
  //     "urls": ["http://localhost:3333/api/products"],
  //     "cacheConfig": {
  //       "strategy": "freshness",
  //       "maxSize": 100,
  //       "maxAge": "1h",
  //       "timeout": "5s"
  //     }
  //   }
  // ]
```


---

> Recap:

# 2 Actions

## Create
## Dispatch

---

class: impact

# 3 State reducer

## State
## Create function
## Register in Store
---

## State

```typescript
// root.state.ts
export interface RootState {
  router: RouterReducerState<any>;
  shoppingCart: ShoppingCart;
}
// shoppingCart.state.ts
export const initialState: ShoppingCart = { _id: '', items: [], client: '', status: '' };
```
---

## Create function

```typescript
// create a reducer function
export const shoppingCartReducer = createReducer(
  initialState,
  on(addShoppingCartItem, onAddShoppingCartItem)
);
// respond to an action
function onAddShoppingCartItem(state: ShoppingCart, { newShoppingCartItem }) {
  return { ...state, items: [...state.items, newShoppingCartItem] };
}
```

---
## Register in Store

### Adding to Root Store

```typescript
export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  shoppingCart: shoppingCartReducer
};
```

> Alternative : Create a new Feature Store

--

```typescript
StoreModule.forFeature('shoppingCart', shoppingCartReducer)
```

---

> Recap:

# 3 State reducer

## State
## Create function
## Register in Store

---

class: impact

# 4 Selectors

## Create selector
## Selecting data
## Fachadas

---

## Create selector

```typescript
export const shoppingCartFeature = (state: RootState) => state.shoppingCart;

export const shoppingCartItems = createSelector(
  shoppingCartFeature,
  (state: ShoppingCart) => state.items
);

export const shoppingCartItemsCount = createSelector(
  shoppingCartFeature,
  (state: ShoppingCart) => state.items.length
);
```

---

## Selecting data

```typescript
//shell.component.ts

public shoppingCartItemsCount$: Observable<number>;

constructor(private store: Store<RootState>) {
  this.shoppingCartItemsCount$ = this.store.pipe(select(shoppingCartItemsCount));
}
```

---

## Fachadas


---

> Recap:

# 4 Selectors

## Create selector
## Selecting data
## Fachadas

---

class: impact

# 5 Effects

## Install
## Efecto básico
## Api async effects
## More Api async effects

---

## Install

```
yarn add @ngrx/effects
```

---

## Efecto básico

```typescript
//shopping-cart.effects.ts
@Injectable()
export class ShoppingCartEffects {
   // Create an Observable of actions,
   // with the pipe functions in line
   public logAddProduct_Inline$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addShoppingCartItem),
        tap(action => console.log('action_Inline:', action))
      ),
    { dispatch: false }
  );

  // Create an Observable of actions,
  // with the pipe functions as class methods
  public logAddProduct$ = createEffect(
    this.logAddProductAction.bind(this),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}

  private logAddProductAction() {
    return this.actions$.pipe(
      ofType(addShoppingCartItem),
      tap(action => console.log('action:', action))
    );
  }
}
```

---

### Register

```typescript
// app.module.ts
EffectsModule.forRoot([ShoppingCartEffects]),
```

---

## Api async effects

```yaml
As a: customer,
  I want: to load my shopping cart from server
  so that: I can see it anywhere
```

---


```typescript
// shopping-cart.actions.ts
export const loadShoppingCart = createAction(
  '[Application Start] Load Shopping Cart',
  props<{}>()
);

export const shoppingCartLoaded = createAction(
  '[ShoppingCart Effects] Shopping Cart Loaded',
  props<{ loadedShoppingCart: ShoppingCart }>()
);

export const shoppingCartErrorLoading = createAction(
  '[ShoppingCart Effects] Shopping Cart Error Loading',
  props<{ error: string }>()
);
```

---

```typescript
//shopping-cart.effects.ts

public loadShoppingCart$ = createEffect(this.loadShoppingCart.bind(this));

private loadShoppingCart() {
  return this.actions$.pipe(
    ofType(loadShoppingCart),
    switchMap(() =>
      this.cartService.getShoppingCart().pipe(
        map(result => shoppingCartLoaded({ loadedShoppingCart: result })),
        catchError(error => of(shoppingCartErrorLoading({ error: error.message })))
      )
    )
  );
}
```

---

```typescript
// shopping-cart.reducer.ts
export const shoppingCartReducer = createReducer(
  initialState,
   on(shoppingCartLoaded, onShoppingCartLoaded),
   on(shoppingCartErrorLoading, onApiError)
);

function onShoppingCartLoaded(state: ShoppingCart, { loadedShoppingCart }) {
  return loadedShoppingCart;
}
function onApiError(state: ShoppingCart, { error }) {
  return { ...state, error: error };
}
```

---

```typescript
// shell.component.ts
public loadShoppingCart(){
  const action = loadShoppingCart({});
  this.store.dispatch(action);
}
```

---

## More Api async effects

```yaml
As a: customer,
  I want: to save my shopping cart to server
  so that: I can see it anywhere
```

---


```typescript
// shopping-cart.actions.ts
export const saveShoppingCart = createAction(
  '[Navigation Section] Save Shopping Cart',
  props<{ shoppingCartToSave: ShoppingCart }>()
);

export const shoppingCartSaved = createAction(
  '[ShoppingCart Effects] Shopping Cart Saved',
  props<{ savedShoppingCart: ShoppingCart }>()
);

export const shoppingCartErrorSaving = createAction(
  '[ShoppingCart Effects] Shopping Cart Error Saving',
  props<{ error: string }>()
);
```

---

```typescript
//shopping-cart.effects.ts

public saveShoppingCart$ = createEffect(this.saveShoppingCart.bind(this));

private saveShoppingCart() {
  return this.actions$.pipe(
    ofType(saveShoppingCart),
    switchMap(action =>
      this.cartService.postShoppingCart(action.shoppingCartToSave).pipe(
        map(result => shoppingCartSaved({ savedShoppingCart: result })),
        catchError(error => of(shoppingCartErrorSaving({ error: error.message })))
      )
    )
  );
}
```

---

```typescript
// shopping-cart.reducer.ts
export const shoppingCartReducer = createReducer(
  initialState,
  on(shoppingCartSaved, onShoppingCartSaved),
  on(shoppingCartErrorSaving, onApiError)
);

function onShoppingCartSaved(state: ShoppingCart, { savedShoppingCart }) {
  return savedShoppingCart;
}
function onApiError(state: ShoppingCart, { error }) {
  return { ...state, error: error };
}
```

---

```typescript
// shell.component.ts
public saveShoppingCart() {
  this.getCurrentShoppingCart$().subscribe(current => this.saveCurrentShoppingCart(current));
}

private getCurrentShoppingCart$() {
  return this.store.pipe(
    select(shoppingCartFeature),
    take(1)
  );
}

private saveCurrentShoppingCart(current: ShoppingCart) {
  const action = saveShoppingCart({ shoppingCartToSave: current });
  this.store.dispatch(action);
}
```

---

> Recap:

# 5 Effects

## Install
## Efecto básico
## Api async effects
## More Api async effects

---

> Next:

# Server Side Rendering

## Angular Universal
## Despliegue con Node Express
## Variantes: shell y pre-rendering


> **Blog de apoyo:** [Detección del cambio en Angular](https://academia-binaria.com/deteccion-del-cambio-en-Angular/)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
