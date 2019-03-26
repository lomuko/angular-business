import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAlfaComponent } from './cart-alfa.component';

describe('CartAlfaComponent', () => {
  let component: CartAlfaComponent;
  let fixture: ComponentFixture<CartAlfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAlfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAlfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
