title: 3-Template
class: animation-fade
layout: true

.bottom-bar[
{{title}}
]

---

class: impact

# {{title}}

## Componentes dinámicos, directivas y pipes

---

    # 1. Plantillas de contenido dinámico

    # 2. Atributos custom con Directivas

    # 3. Funciones de transformación con Pipes


---

```yaml
As a: customer,
  I want: to see a product card with price
  so that: i can decide to purchase it or not

As a: seller,
  I want: to see a product card with stock
  so that: i can ask for more or not

As a: seller,
  I want: to see a mark on aproduct without stock
  so that: i can check it quickly

As a: customer,
  I want: to see a product price in euros an dollars
  so that: i can decide to purchase it or not
```

---

class: impact

# 1 Plantillas de contenido dinámico

## Un componente común para artículos
## Implementaciones Shop y Warehouse

---


---

> Recap:

# 1 Plantillas de contenido dinámico

---

class: impact

# 2 Atributos custom con Directivas

## Mostrar fuera de stock
## https://netbasal.com/create-modular-components-with-angular-structural-directives-1a5198d9ab7d

---
ng generate @schematics/angular:directive shared/out-of-stock --project=warehouse --module=shared\shared.module.ts --export


---

> Recap:

# 2 Atributos custom con Directivas

---

class: impact

# 3 Funciones de transformación con Pipes

## Precios también en dólares
## Memoria para no re llamar...

---

ng generate @schematics/angular:pipe shared/dollar --project=shop --module=shared\shared.module.ts --export

---

> Recap:

# 3 Funciones de transformación con Pipes

---


> Next:

# Redux con observables RxJs

## Arquitectura del patrón Redux
## Implementación de un Store con RxJs


> **Blog de apoyo:** [Detección del cambio en Angular](https://academia-binaria.com/deteccion-del-cambio-en-Angular/)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
