import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiProductsService } from './api-products.service';

describe('ApiProductsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: ApiProductsService = TestBed.get(ApiProductsService);
    expect(service).toBeTruthy();
  });
});
