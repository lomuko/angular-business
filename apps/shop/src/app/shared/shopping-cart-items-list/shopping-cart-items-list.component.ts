import { ShoppingCartItem } from '@angular-business/models';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-business-shopping-cart-items-list',
  templateUrl: './shopping-cart-items-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartItemsListComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[];
  @Output() remove: EventEmitter<ShoppingCartItem> = new EventEmitter<ShoppingCartItem>();
  constructor() {}

  ngOnInit() {}
}
