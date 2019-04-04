title: 2-Change
class: animation-fade
layout: true

.bottom-bar[
{{title}}
]

---

class: impact

# {{title}}

## Detección del cambio en Angular

---

    # 1. Estrategias de detección del cambio

    # 2. Inmutabilidad


---

class: impact

# 1 Estrategias de detección del cambio

## Default

## OnPush

---

```terminal
ng g m shopping-cart --project=shop --routing
ng g c shopping-cart --project=shop --module=shopping-cart\shopping-cart.module.ts
```

```terminal
ng g c shopping-cart\itemPicker --project=shop --module=shopping-cart\shopping-cart.module.ts
ng g c shopping-cart\itemsList --project=shop --module=shopping-cart\shopping-cart.module.ts
ng g c shopping-cart\total-units --project=shop --module=shopping-cart\shopping-cart.module.ts
```

## 1.1 Default

```typescript
import { ChangeDetectionStrategy } from '@angular/core';
changeDetection: ChangeDetectionStrategy.Default
```

Con las estrategias por defecto

> Las cosas funcionan como se espera.

Se actualiza la vista con:

1 - Datos asíncronos recibidos desde el API
2 - Procesos en Background
3 - Interacción del usuario

---

## 1.2 OnPush


```typescript
import { ChangeDetectionStrategy } from '@angular/core';
changeDetection: ChangeDetectionStrategy.OnPush
```

Al usar la detección OnPush en el contenedor:

> Las datos muestran incoherencias o no se muestran

Se actualiza la vista con:

1 - Los recepción de datos no se muestra en pantalla
2.1 - El proceso en Background de creación en el picker no ocurre al iniciar porque no llega a crearse. Hay que forzarlo con un click.
2.2 - El proceso en Background de borrado en el container (si llega a tiempo)  ya no desencadena la orden de pintado
3 - La interacción del usuario sí que obliga al repintado, pero no actualiza la hora de actualización tras guardar en servidor

---

> Recap:

# 1 Estrategias de detección del cambio

## Default

## OnPush

---

class: impact

# 2 Técnicas OnPush

## DetectChanges

## Async

## Inmutable

---

## 2.1 DetectChanges

Forzar la detección de cambios

```typescript
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

public changeConfig = {
  simulateBackground: true,
  useAsync: false,
  useCDR: true,
  cloningList: false
};

constructor(private cdr: ChangeDetectorRef) {}

if (this.changeConfig.useCDR) {
  this.cdr.detectChanges();
}

```

> Las datos se muestran correctamente y a su debido tiempo

Se actualiza la vista con:

1 - La recepción de datos muestra todo ok, a base de hacerlo en cada callback
2 - El proceso en Background también fuerza el repintado
3 - La interacción continúa funcionando bien, y refrescando tras el guardado

---

## 2.2 Async

```html
<mat-card *ngIf="subscribing">
<mat-card-content *ngIf="(shoppingCart$ | async ) as shoppingCart">
```

```typescript
public subscribing = false;
private useCDR = false;

tap()

```

> Las datos siguen mostrando incoherencias o no se muestran

Se actualiza la vista con:

1 - Los recepción de datos muestra todo ok pues el async llama por su cuenta al cdr
2 - El proceso en Background ahora ya no refresca, sigue necesitando el async
3 - La interacción continúa de guardado funcionando bien y refrescando tras el guardado, pero la manipulación de la lista ya no


---

## 2.3 Inmutable

> Esta parte no funciona del todo.....

```typescript
public addToCart(item: ShoppingCartItem) {
  if (this.cloningList) {
    this.shoppingCart.items = [...this.shoppingCart.items, { ...item }];
  } else {
    this.shoppingCart.items.push({ ...item });
  }
  this.calculateTotalUnits(this.shoppingCart);
  console.log(`Adding item. Now we have ${this.totalUnits} units`);
}

public removeFromCart(item: ShoppingCartItem) {
  if (this.cloningList) {
    this.shoppingCart.items = this.shoppingCart.items.filter(i => i.product._id !== item.product._id);
  } else {
    this.shoppingCart.items.forEach((i, index) => {
      if (i.product._id === item.product._id) this.shoppingCart.items.splice(index, 1);
    });
  }
  this.calculateTotalUnits(this.shoppingCart);
  console.log(`Remove item with product._id: ${item.product._id}. Now we have ${this.totalUnits} units`);
}

```
> Las datos siguen mostrando incoherencias o no se muestran

Se actualiza la vista con:

1 - Los recepción de datos muestra todo ok pues el async llama por su cuenta al cdr
2 - El proceso en Background ahora ya no refresca, sigue necesitando el async
3 - La interacción continúa de guardado funcionando bien y refrescando tras el guardado, pero la manipulación de la lista ya no


---

> Recap:

# 2 Test de Integración con Cypress

## Cypress

## Test e2e

---

class: impact

# 3 Test Unitarios con Jest

## Jest

## Tests unitarios

---

## 3.1 Jest

```json
  "test:shop": "ng test shop --watch",
  "test:warehouse": "ng test warehouse --watch",
  "test:api": "ng test api --watch",
```

```terminal
yarn test:shop
yarn test:warehouse
yarn test:api
```

---

## 3.2 Tests unitarios

shop: app.component.spec.ts

```typescript
beforeEach(async(() => {
  const httpClientMock = {
    get: jest.fn()
  };
  httpClientMock.get.mockReturnValueOnce(of({ message: 'Welcome to api!' }));
  TestBed.configureTestingModule({
    imports: [RouterTestingModule, ViewsModule, HttpClientModule],
    declarations: [AppComponent],
    providers: [{ provide: HttpClient, useValue: httpClientMock }]
  }).compileComponents();
}));
expect(app.title).toEqual('shop and Welcome to api!');
expect(compiled.querySelector('h1').textContent).toContain('Welcome to shop and Welcome to api!!');
```

---

> Recap:

# 3 Aplicaciones

## Jest

## Tests unitarios

---


> Next:

# Detección del cambio en Angular

## Estrategias de detección del cambio
## Inmutabilidad


> **Blog de apoyo:** [Test de integración y unitarios](https://academia-binaria.com/test-de-integracion-y-unitarios/)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
