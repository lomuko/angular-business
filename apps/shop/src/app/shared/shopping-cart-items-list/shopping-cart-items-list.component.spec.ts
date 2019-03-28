import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartItemsListComponent } from './shopping-cart-items-list.component';

describe('ShoppingCartItemsListComponent', () => {
  let component: ShoppingCartItemsListComponent;
  let fixture: ComponentFixture<ShoppingCartItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
