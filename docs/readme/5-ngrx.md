title: 5-NgRx
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

    # 1. Instalación y configuración
    # 2. Actions
    # 3. State reducer
    # 4. Selectors
    # 5. Effects


---

class: impact

# 1 Instalación y configuración

## Instalación de NgRx
## Registro y configuración
## Router y DevTools

---

```yaml
As a: developer,
  I want: to use logging tools
  so that: I can debug the application better

As a: devoloper,
  I want: to type the actions
  so that: I can get help while developing

As a: developer,
  I want: to use query my state
  so that: I can be notified

As a: developer,
  I want: to use chain actions
  so that: I can make asynchronous calls
```

---

```yaml
As a: customer,
  I want: to add items to my shopping cart
  so that: I can buy them

As a: customer,
  I want: to see the total units always updated
  so that: I know how many items I will buy

```

> NgRx no hace rápido a Redux, sino mantenible el boilerplate

---

## 1.1 Instalación de NgRx

```
ng add @ngrx/store@next --project shop --statePath store --stateInterface RootState
```
---

## 1.2 Registro y configuración

```typescript
StoreModule.forRoot(rootReducers, { metaReducers })
export const rootReducers: ActionReducerMap<RootState> = {};
```

---

## 1.3 Router y DevTools

```
ng add @ngrx/router-store@next --project shop
ng add @ngrx/store-devtools@next --project shop
```

```typescript
export interface RootState {
  router: RouterReducerState<any>;
}
```

---

> Recap:

# 1 Instalación y configuración

## Instalación de NgRx
## Registro y configuración
## Router y DevTools

---

class: impact

# 2 Actions

## Create
## Dispatch

---

## Create

```typescript
import { ShoppingCartItem } from '@angular-business/models';
import { createAction, props } from '@ngrx/store';

export const addShoppingCartItem = createAction(
  '[Product Catalog] Add to Shopping Cart',
  props<{ payload: ShoppingCartItem }>()
);
```

---

## Dispatch

```typescript
constructor(private store: Store<RootState>) {}

public buyProduct(product: Product) {
  const payload = { product: product, quantity: 1 };
  const action = addShoppingCartItem({ payload });
  this.store.dispatch(action);
}
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
export interface RootState {
  router: RouterReducerState<any>;
  shoppingCart: ShoppingCart;
}
```
---

## Create function

```typescript
const initialState: ShoppingCart = { _id: '', items: [], client: '', status: '' };
export const shoppingCartReducer = createReducer(
  initialState,
  on(addShoppingCartItem, onAddShoppingCartItem)
);

function onAddShoppingCartItem(state: ShoppingCart, { payload }) {
  return { ...state, items: [...state.items, payload] };
}
```

--

```typescript
const initialState: ShoppingCart = { _id: '', items: [], client: '', status: '' };
export const shoppingCartReducer = createReducer(
  initialState,
  on(addShoppingCartItem, (state, { payload }) => ({
    ...state,
    items: [...state.items, payload]
  }))
);
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

### Creating a new Feature Store

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

---

## Create selector

```typescript
const shoppingCart = (state: RootState) => state.shoppingCart;

export const shoppingCartItems = createSelector(
  shoppingCart,
  (state: ShoppingCart) => state.items
);

export const shoppingCartItemsCount = createSelector(
  shoppingCart,
  (state: ShoppingCart) => state.items.length
);
```

---

## Selecting data

```typescript
public shoppingCartItemsCount$: Observable<number>;

constructor(private store: Store<RootState>) {
  this.shoppingCartItemsCount$ = this.store.pipe(select(shoppingCartItemsCount));
}
```

---

> Recap:

# 4 Selectors

## Create selector
## Selecting data

---

class: impact

# 5 Effects

## ...

---

---

> Recap:

# 5 Effects

## ...

---

> Next:

# Deploy Progressive Web Apps

## Angular Service Worker con el CLI
## Configuración de caché, notificaciones y actualizaciones


> **Blog de apoyo:** [Detección del cambio en Angular](https://academia-binaria.com/deteccion-del-cambio-en-Angular/)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
