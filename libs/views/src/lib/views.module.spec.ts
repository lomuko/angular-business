import { async, TestBed } from '@angular/core/testing';
import { ViewsModule } from './views.module';

describe('ViewsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ViewsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ViewsModule).toBeDefined();
  });
});
