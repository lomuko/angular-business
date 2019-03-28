import { Categories } from '@angular-business/models';
import { ViewsModule } from '@angular-business/views';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
      declarations: [CartAlfaComponent],
      imports: [CommonModule, FormsModule, ViewsModule, NoopAnimationsModule],
      providers: [{ provide: HttpClient, useValue: httpClientMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAlfaComponent);
    component = fixture.componentInstance;
    component.shoppingCart = {
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
    };
    component.products = [
      {
        _id: 'A-1',
        description: 'iMac',
        category: Categories.Computer,
        brand: 'Apple',
        price: 3000,
        stock: 10
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
