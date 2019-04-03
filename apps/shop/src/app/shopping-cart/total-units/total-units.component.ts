import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-business-total-units',
  templateUrl: './total-units.component.html',
  styles: []
})
export class TotalUnitsComponent implements OnInit {
  @Input() totalUnits = 0;
  constructor() {}

  ngOnInit() {}
}
