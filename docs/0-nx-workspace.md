title: 0-Nx
class: animation-fade
layout: true

.bottom-bar[
{{title}}
]

---

class: impact

# {{title}}

## Nx workspace

---

    # 1. Nx y el CLI

    # 2. Estructura de un workspace

    # 3. Proyectos

    # 4. Librerías

---

class: impact

# 1 Nx y el CLI

## Instalación de Nx y CLI

## Crear y configurar un workspace

---

## 1.1 Instalación de Nx y CLI

> Angular es una plataforma de desarrollo dogmática y llave en mano.

> Nrwl Extensions es un conjunto de mejoras para el desarrollo empresarial moderno.

```terminal
yarn add global @angular/cli
yarn add global @nrwl/schematics
```

---

## 1.2 Crear y configurar un workspace

```terminal
yarn create nx-workspace angular-business
```

ts-lint

```json
  "plugins": ["@getify/proper-arrows"],
  "no-magic-numbers": [true, 0, 1],
  "cyclomatic-complexity": [true, 8],
  "max-file-line-count": [true, 256]
```

prettier

```js
{
  "singleQuote": true,
  "printWidth": 128
}
```

---

> Recap:

# 1 Nx y el CLI

## Instalación de Nx y CLI

## Crear y configurar un workspace

---

class: impact

# 2 Estructura de un workspace

## Apps

## Libs

---

### Cosas comunes

- angular.json
- package.json
- ts...

### Cosas distintas

- nx.json
- /tools
- /apps
- /libs

---

## 2.1 Apps

```
ng generate @nrwl/schematics:application store --inlineStyle --routing
./apps/store
./apps/store-e2e
yarn start
```
---

## 2.2 Libs

```
ng generate @nrwl/schematics:library ui --inlineStyle
./lis/ui
ng generate @schematics/angular:component product --project=ui --export --inlineStyle
```

---

> Recap:

# 2 Estructura de un workspace

## Apps

## Libs

---

> Next:

# Testing unitario y de integración

## Jest para tests unitarios

## Cypress para test de integración


> **Blog de apoyo:** [Nx workspace](https://academia-binaria.com/Nx-workspace/)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)

yarn add cypress --dev