import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './home.routes';

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
