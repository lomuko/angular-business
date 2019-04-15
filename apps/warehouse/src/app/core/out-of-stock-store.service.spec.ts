import { TestBed } from '@angular/core/testing';

import { OutOfStockStoreService } from './out-of-stock-store.service';

describe('OutOfStockStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutOfStockStoreService = TestBed.get(OutOfStockStoreService);
    expect(service).toBeTruthy();
  });
});
