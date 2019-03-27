import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ViewsModule {}
