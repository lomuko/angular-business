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

## Assets

```json
"assetGroups": [
  {
    "name": "app-without-lazy",
    "installMode": "prefetch",
    "resources": {
      "files": [
        "/favicon.ico",
        "/index.html",
        "/*.css",
        "/common*.js",
        "/main*.js",
        "/ngsw*.js",
        "/*woker*.js",
        "/*polyfills*.js",
        "/runtime*.js"
      ]
    }
  },
  {
    "name": "assets-and-lazy-modules",
    "installMode": "lazy",
    "updateMode": "prefetch",
    "resources": {
      "files": [
        "/assets/**",
        "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)",
        "/*.js"
      ]
    }
  }
]
```

---

## API

```json
 "dataGroups": [
  {
    "name": "cache-first",
    "urls": [
      "http://localhost:3333/api"
    ],
    "cacheConfig": {
      "strategy": "performance",
      "maxSize": 10,
      "maxAge": "1d"
    }
  },
  {
    "name": "api-first",
    "urls": [
      "http://localhost:3333/api/products"
    ],
    "cacheConfig": {
      "strategy": "freshness",
      "maxSize": 100,
      "maxAge": "1h",
      "timeout": "5s"
    }
  }
]
```


---

> Recap:

# 2 Configuración de caché

## Assets
## API

---

class: impact

# 3 Actualizaciones y notificaciones

## Actualización de versiones
## Notificaciones Push

---

## Actualización de versiones

```typescript
public appData: = {
  version: '0.0.1',
  changelog: 'Better Updating Mode'
};
constructor(private swUpdate: SwUpdate) {
  if (this.swUpdate.isEnabled) {
    this.swUpdate.available.subscribe(event => {
      if (event.current.appData) {
        this.appData = event.current.appData;
      }
      let msg = `New version ${this.appData.version} available. ${this.appData.changelog}.`;
      msg += 'Load New Version?';
      if (confirm(msg)) {
        window.location.reload();
      }
    });
  }
}
```

```json
"appData": {
  "version": "1.0.0",
  "changelog": "Added better update mode"
}
```
---

## Notificaciones Push

```typescript
private subscribeToNotifications() {
  if (this.swPush.isEnabled) {
    this.swPush.requestSubscription({serverPublicKey: 'VAPID_PUBLIC_KEY'})
      .then(sub => console.log('send subscription to the server', sub.toJSON()))
      .catch(err => console.error('Could not subscribe to notifications', err));
    this.swPush.messages.subscribe(msg => console.log('Received message', msg));
  }
}
```

> Recap:

# 3 Actualizaciones y notificaciones

## Actualización de versiones
## Notificaciones Push

---

class: impact

# 4 Shell

## Una ruta para amenizar la carga
## Materialización durante la compilación


---

## Una ruta para amenizar la carga


---

## Materialización durante la compilación

---

> Recap:

# 4 Shell

## Una ruta para amenizar la carga
## Materialización durante la compilación

---

> Next:

# Server Side Rendering

## Angular Universal
## Despliegue con Node Express
## Variantes: shell y pre-rendering


> **Blog de apoyo:** [Detección del cambio en Angular](https://academia-binaria.com/deteccion-del-cambio-en-Angular/)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
