import { productsMock, shoppingCartMock } from '@angular-business/models';
import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartItemsListComponent } from '../shopping-cart-items-list/shopping-cart-items-list.component';
import { ShoppingCartTotalUnitsComponent } from '../shopping-cart-total-units/shopping-cart-total-units.component';
import { CartAlfaComponent } from './cart-alfa.component';

describe('CartAlfaComponent', () => {
  let component: CartAlfaComponent;
  let fixture: ComponentFixture<CartAlfaComponent>;
  const httpClientMock = {
    get: jest.fn(),
    post: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartAlfaComponent, ShoppingCartItemsListComponent, ShoppingCartTotalUnitsComponent],
      imports: [CommonModule, FormsModule, ViewsModule, NoopAnimationsModule],
      providers: [{ provide: HttpClient, useValue: httpClientMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAlfaComponent);
    component = fixture.componentInstance;
    component.shoppingCart = shoppingCartMock;
    component.products = productsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
