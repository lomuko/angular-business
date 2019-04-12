import { HttpClient } from '@angular/common/http';
import { ExRatePipe } from './ex-rate.pipe';
class MockHttpClient extends HttpClient {
  constructor() {
    super(null);
  }
}
describe('ExRatePipe', () => {
  it('create an instance', () => {
    const pipe = new ExRatePipe(new MockHttpClient());
    expect(pipe).toBeTruthy();
  });
});
