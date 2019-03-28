import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTotalUnitsComponent } from './shopping-cart-total-units.component';

describe('ShoppingCartTotalUnitsComponent', () => {
  let component: ShoppingCartTotalUnitsComponent;
  let fixture: ComponentFixture<ShoppingCartTotalUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartTotalUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartTotalUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
