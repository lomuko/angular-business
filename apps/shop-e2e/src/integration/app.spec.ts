import { getGreeting, getListHeader, getProductCard, getProductPrice } from '../support/app.po';

describe('Shop Home', () => {
  const numProducts = 6;
  beforeEach(() => cy.visit('/'));

  it('should display welcome message from shop and api', () => {
    getGreeting().contains('Welcome to shop and Welcome to api!!');
  });

  it('should contains a product list working component', () => {
    getListHeader().contains('Product List');
  });

  it(`should contains at least ${numProducts} product cards`, () => {
    getProductCard()
      .its('length')
      .should('be.at.least', numProducts);
  });

  it(`should contains product cards with price`, () => {
    getProductPrice()
      .contains('Only')
      .and('contain', '€');
  });
});
