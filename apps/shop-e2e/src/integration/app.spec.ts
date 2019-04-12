import { getGreeting, getListHeader, getProductCard, getProductPrice, getProductPriceExRate } from '../support/app.po';

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

  it(`3.1 should contains product cards with price`, () => {
    getProductPrice()
      .contains('Only')
      .and('contain', '€');
  });

  it(`3.3 should price in dollars`, () => {
    getProductPriceExRate()
      .contains('Also')
      .and('contain', '$');
  });

  it(`3.3 should price in pounds`, () => {
    getProductPriceExRate()
      .contains('or')
      .and('contain', '£');
  });
});
