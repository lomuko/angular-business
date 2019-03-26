import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartAlfaComponent } from '../cart-alfa/cart-alfa.component';
@NgModule({
  declarations: [CartAlfaComponent],
  imports: [CommonModule, FormsModule],
  exports: [CartAlfaComponent]
})
export class SharedModule {}
