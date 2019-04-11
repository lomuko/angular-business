import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DollarPipe } from './dollar.pipe';

@NgModule({
  declarations: [DollarPipe],
  imports: [CommonModule, FormsModule, ViewsModule],
  exports: [ViewsModule, DollarPipe]
})
export class SharedModule {}
