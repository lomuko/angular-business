import { Categories, Product, ShoppingCartItem } from '@angular-business/models';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-business-item-picker',
  templateUrl: './item-picker.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemPickerComponent implements OnInit {
  @Input() public products: Product[];
  @Output() public itemPicked: EventEmitter<ShoppingCartItem> = new EventEmitter<ShoppingCartItem>();
  public item: ShoppingCartItem;
  constructor() {}

  ngOnInit() {
    this.resetItem();
  }

  public addToCart() {
    this.itemPicked.next(this.item);
    this.resetItem();
  }

  private resetProduct() {
    return { _id: '', description: '', category: Categories.Computer, brand: '', price: 0, stock: 0 };
  }
  private resetItem() {
    this.item = { product: this.resetProduct(), quantity: 0 };
  }
}
