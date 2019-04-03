import { getHeader } from '../support/shopping-cart.po';

describe('Shop Shopping-Cart', () => {
  beforeEach(() => cy.visit('/shopping-cart'));

  it('should display Shopping cart header', () => {
    getHeader().contains('Shopping Cart');
  });
});
