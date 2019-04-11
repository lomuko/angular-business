import { Card } from '@angular-business/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-business-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public card: Card;
  constructor() {}

  ngOnInit() {}
}
