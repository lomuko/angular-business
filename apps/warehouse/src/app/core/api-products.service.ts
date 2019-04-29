import { Product } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  private readonly url = environment.apiUrl + '/api/products';

  constructor(private httpClient: HttpClient) {}

  public getProducts$() {
    return this.httpClient.get<Product[]>(this.url);
  }

  public putProduct$(product: Product) {
    return this.httpClient.put(this.url, product);
  }
}
