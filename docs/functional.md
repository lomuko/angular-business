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
ng add @angular/material --project=warehouse
@import '~@angular/material/prebuilt-themes/purple-green.css';
ng generate @schematics/angular:module core --project=warehouse
ng generate @angular/material:nav core/shell --project=warehouse --inlineStyle --module=core/core.module.ts --export
ng generate @schematics/angular:module home --project=warehouse --routing
ng generate @angular/material:dashboard home --project=warehouse --inlineStyle --module=home/home.module.ts
```