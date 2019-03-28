import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartAlfaComponent } from './cart-alfa/cart-alfa.component';
import { ShoppingCartItemsListComponent } from './shopping-cart-items-list/shopping-cart-items-list.component';
import { ShoppingCartTotalUnitsComponent } from './shopping-cart-total-units/shopping-cart-total-units.component';

@NgModule({
  declarations: [CartAlfaComponent, ShoppingCartItemsListComponent, ShoppingCartTotalUnitsComponent],
  imports: [CommonModule, FormsModule, ViewsModule],
  exports: [CartAlfaComponent, ViewsModule]
})
export class SharedModule {}
