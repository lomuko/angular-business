import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[angularBusinessOutOfStock]'
})
export class OutOfStockDirective {
  private minimalStock = 10;
  @Input()
  set angularBusinessOutOfStock(stock: number) {
    const color = stock <= this.minimalStock ? 'Red' : 'Green';
    this.el.nativeElement.style.backgroundColor = color;
  }
  constructor(private el: ElementRef) {}
}
