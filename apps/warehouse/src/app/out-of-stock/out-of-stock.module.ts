import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutOfStockRoutingModule } from './out-of-stock-routing.module';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component';


@NgModule({
  declarations: [OutOfStockComponent],
  imports: [
    CommonModule,
    OutOfStockRoutingModule
  ]
})
export class OutOfStockModule { }
