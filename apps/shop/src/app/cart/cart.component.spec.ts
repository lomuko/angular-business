import { productsMock, shoppingCartMock } from '@angular-business/models';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CartService } from '../cart.service';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  const cartServiceMock = {
    getShoppingCart: jest.fn(),
    getProducts: jest.fn(),
    postShoppingCart: jest.fn()
  };
  cartServiceMock.getShoppingCart.mockReturnValueOnce(of(shoppingCartMock));
  cartServiceMock.getProducts.mockReturnValueOnce(of(productsMock));
  cartServiceMock.postShoppingCart.mockReturnValueOnce(of(shoppingCartMock));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [{ provide: CartService, useValue: cartServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
