import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartAlfaComponent } from './cart-alfa/cart-alfa.component';
@NgModule({
  declarations: [CartAlfaComponent],
  imports: [CommonModule, FormsModule, ViewsModule],
  exports: [CartAlfaComponent, ViewsModule]
})
export class SharedModule {}
