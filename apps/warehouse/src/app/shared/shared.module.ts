import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutOfStockDirective } from './out-of-stock.directive';

@NgModule({
  declarations: [OutOfStockDirective],
  imports: [CommonModule, ViewsModule],
  exports: [ViewsModule, OutOfStockDirective]
})
export class SharedModule {}
