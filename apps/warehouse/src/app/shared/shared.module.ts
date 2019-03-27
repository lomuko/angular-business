import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, ViewsModule],
  exports: [ViewsModule]
})
export class SharedModule {}
