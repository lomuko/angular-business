import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExRatePipe } from './ex-rate.pipe';

@NgModule({
  declarations: [ExRatePipe],
  imports: [CommonModule, FormsModule, ViewsModule, HttpClientModule],
  exports: [ViewsModule, ExRatePipe]
})
export class SharedModule {}
