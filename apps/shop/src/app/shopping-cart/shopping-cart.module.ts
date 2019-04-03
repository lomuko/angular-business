import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { TotalUnitsComponent } from './total-units/total-units.component';

@NgModule({
  declarations: [ShoppingCartComponent, ItemPickerComponent, ItemsListComponent, TotalUnitsComponent],
  imports: [CommonModule, FormsModule, ShoppingCartRoutingModule, SharedModule]
})
export class ShoppingCartModule {}
