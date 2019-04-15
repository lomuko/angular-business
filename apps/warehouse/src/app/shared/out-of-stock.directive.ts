import { Directive, ElementRef, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[angularBusinessOutOfStock]'
})
export class OutOfStockDirective {
  private minimalStock = environment.minimalStock;
  @Input()
  set angularBusinessOutOfStock(stock: number) {
    const color = stock <= this.minimalStock ? 'Red' : 'Green';
    this.el.nativeElement.style.backgroundColor = color;
  }
  constructor(private el: ElementRef) {}
}
