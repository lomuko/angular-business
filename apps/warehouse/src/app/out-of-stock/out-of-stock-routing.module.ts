import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component';

const routes: Routes = [
  {
    path: '',
    component: OutOfStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutOfStockRoutingModule {}
