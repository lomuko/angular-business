import { productsMock, shoppingCartMock } from '@angular-business/models';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CartService } from '../cart.service';
import { SharedModule } from '../shared/shared.module';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { TotalUnitsComponent } from './total-units/total-units.component';

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
      declarations: [ShoppingCartComponent, ItemPickerComponent, ItemsListComponent, TotalUnitsComponent],
      imports: [FormsModule, NoopAnimationsModule, SharedModule],
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
