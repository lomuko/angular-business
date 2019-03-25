import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ViewsModule {}
