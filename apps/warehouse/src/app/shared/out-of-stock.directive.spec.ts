import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { OutOfStockDirective } from './out-of-stock.directive';

class MockElementRef extends ElementRef {
  constructor() {
    super(null);
  }
}

describe('OutOfStockDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutOfStockDirective],
      imports: [CommonModule]
    }).compileComponents();
  }));
  it('should create an instance', () => {
    const directive = new OutOfStockDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
