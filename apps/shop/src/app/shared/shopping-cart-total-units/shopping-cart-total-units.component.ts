import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-business-shopping-cart-total-units',
  templateUrl: './shopping-cart-total-units.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartTotalUnitsComponent implements OnInit {
  @Input() totalUnits = 0;
  constructor() {}

  ngOnInit() {}
}
