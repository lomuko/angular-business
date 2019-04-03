import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUnitsComponent } from './total-units.component';

describe('TotalUnitsComponent', () => {
  let component: TotalUnitsComponent;
  let fixture: ComponentFixture<TotalUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
