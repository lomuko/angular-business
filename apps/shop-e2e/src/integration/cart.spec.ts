import { getHeader } from '../support/cart.po';

describe('Shop Shopping-Cart', () => {
  beforeEach(() => cy.visit('/cart'));

  it('should display Shopping cart header', () => {
    getHeader().contains('Shopping Cart');
  });
});
