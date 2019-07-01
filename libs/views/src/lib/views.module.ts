import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  declarations: [ProductComponent],
  exports: [ProductComponent, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule]
})
export class ViewsModule {}
