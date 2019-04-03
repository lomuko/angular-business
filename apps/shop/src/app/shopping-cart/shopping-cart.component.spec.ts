import { productsMock, shoppingCartMock } from '@angular-business/models';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CartService } from '../cart.service';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
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
      declarations: [ShoppingCartComponent],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [{ provide: CartService, useValue: cartServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*
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
*/
