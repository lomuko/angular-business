import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar'
})
export class DollarPipe implements PipeTransform {
  private euroDollars = 1.13;
  public transform = (euros: number): number => euros * this.euroDollars;
}
