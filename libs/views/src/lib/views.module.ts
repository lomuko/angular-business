import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  declarations: [ProductComponent],
  exports: [ProductComponent, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule]
})
export class ViewsModule {}
