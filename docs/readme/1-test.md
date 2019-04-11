title: 1-Test
class: animation-fade
layout: true

.bottom-bar[
{{title}}
]

---

class: impact

# {{title}}

## Test de integración y unitarios

---

    # 1. Tipos de tests

    # 2. Test de Integración con Cypress

    # 3. Test Unitarios con Jest

---

```yaml
As a: developer,
  I want: to test end to end my app
  so that: i can be sure of the functions

As a: developer,
  I want: to unit test my app
  so that: i can be sure of the structure
```

---
class: impact

# 1 Tipos de tests

## Integración o e2e

## Unitarios

---

## 1.1 Integración o e2e

---

## 1.2 Unitarios


---

> Recap:

# 1 Nx y el CLI

## Integración o e2e

## Unitarios

---

class: impact

# 2 Test de Integración con Cypress

## Cypress

## Test e2e

---

## 2.1 Cypress

```terminal
yarn add cypress --dev
```

```json
  "e2e:shop": "ng e2e shop-e2e --watch",
  "e2e:warehouse": "ng e2e warehouse-e2e --watch",
```

```terminal
yarn e2e:shop
yarn e2e:warehouse
```

---

## 2.2 Test e2e

```typescript
export const getGreeting = () => cy.get('h1');
export const getProduct = () => cy.get('angular-business-product p');
```

```typescript
import { getGreeting, getProduct } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message from shop and api', () => {
    getGreeting().contains('Welcome to shop and Welcome to api!!');
  });

  it('should contains a product working component', () => {
    getProduct().contains('product works!');
  });
});
```

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
## Técnicas OnPush
## Optimización


> **Blog de apoyo:** [Test de integración y unitarios](https://academia-binaria.com/test-de-integracion-y-unitarios/)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)

