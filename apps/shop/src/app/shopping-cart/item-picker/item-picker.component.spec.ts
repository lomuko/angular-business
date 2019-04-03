import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { ItemPickerComponent } from './item-picker.component';

describe('ItemPickerComponent', () => {
  let component: ItemPickerComponent;
  let fixture: ComponentFixture<ItemPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPickerComponent],
      imports: [FormsModule, NoopAnimationsModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
