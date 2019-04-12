import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'exRate'
})
export class ExRatePipe implements PipeTransform {
  private euroDollars = 1.13;
  constructor(private httpClient: HttpClient) {}
  public transform(euros: number, symbol: string): number | Observable<number> {
    if (!symbol) {
      return euros * this.euroDollars;
    } else {
      const ratesApi = 'https://api.exchangeratesapi.io/latest?symbols=' + symbol;
      return this.httpClient.get<any>(ratesApi).pipe(map(resp => euros * resp.rates[symbol]));
    }
  }
}
