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
  I want: to see the total units always updated
  so that: I know how many items I will buy

As a: customer,
  I want: to add items to my shopping cart
  so that: I can buy them

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

---

> Recap:

# 1 Instalación y configuración

## Instalación de NgRx
## Registro y configuración
## Router y DevTools

---

class: impact

# 2 Actions

## ...

---


---

> Recap:

# 2 Actions

## ...

---

class: impact

# 3 State reducer

## ...

---

---

> Recap:

# 3 State reducer

## ...

---

class: impact

# 4 Selectors

## ...

---

---

> Recap:

# 4 Selectors

## ...

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
