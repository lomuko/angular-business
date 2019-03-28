import { ViewsModule } from '@angular-business/views';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const httpClientMock = {
      get: jest.fn()
    };
    httpClientMock.get.mockReturnValueOnce(of({ message: 'Welcome to api!' }));
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ViewsModule, HttpClientModule, CoreModule, NoopAnimationsModule],
      declarations: [AppComponent],
      providers: [{ provide: HttpClient, useValue: httpClientMock }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('shop and Welcome to api!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to shop and Welcome to api!!');
  });
});
