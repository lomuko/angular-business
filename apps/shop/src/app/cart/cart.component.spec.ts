import { Categories } from '@angular-business/models';
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
  cartServiceMock.getShoppingCart.mockReturnValueOnce(
    of({
      _id: 'aRandomIdentificator',
      items: [
        {
          product: {
            _id: 'A-1',
            description: 'iMac',
            category: Categories.Computer,
            brand: 'Apple',
            price: 3000,
            stock: 10
          },
          quantity: 1
        }
      ],
      client: '',
      status: `created at ${new Date().toISOString()}`
    })
  );
  cartServiceMock.getProducts.mockReturnValueOnce(
    of([
      {
        _id: 'A-1',
        description: 'iMac',
        category: Categories.Computer,
        brand: 'Apple',
        price: 3000,
        stock: 10
      }
    ])
  );
  cartServiceMock.postShoppingCart.mockReturnValueOnce(
    of({
      _id: 'aRandomIdentificator',
      items: [],
      client: '',
      status: `saved at ${new Date().toISOString()}`
    })
  );
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
