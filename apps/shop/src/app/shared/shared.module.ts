import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DollarPipe } from './dollar.pipe';

@NgModule({
  declarations: [DollarPipe],
  imports: [CommonModule, FormsModule, ViewsModule, HttpClientModule],
  exports: [ViewsModule, DollarPipe]
})
export class SharedModule {}
