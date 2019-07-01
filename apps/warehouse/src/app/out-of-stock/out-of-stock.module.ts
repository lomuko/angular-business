import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OutOfStockRoutingModule } from './out-of-stock-routing.module';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component';

@NgModule({
  declarations: [OutOfStockComponent],
  imports: [CommonModule, OutOfStockRoutingModule, MatListModule, MatIconModule]
})
export class OutOfStockModule {}
