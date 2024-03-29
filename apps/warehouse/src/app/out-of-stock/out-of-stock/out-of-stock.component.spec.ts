import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OutOfStockComponent } from './out-of-stock.component';

describe('OutOfStockComponent', () => {
  let component: OutOfStockComponent;
  let fixture: ComponentFixture<OutOfStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutOfStockComponent],
      imports: [MatListModule, MatIconModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
