import { ShoppingCartItem } from '@angular-business/models';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'angular-business-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[];
  @Output() remove: EventEmitter<ShoppingCartItem> = new EventEmitter<ShoppingCartItem>();

  constructor() {}

  ngOnInit() {}
}
