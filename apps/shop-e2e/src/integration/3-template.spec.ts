import { getProductPrice, getProductPriceExRate } from '../support/home.po';

describe('3-Template', () => {
  const numProducts = 6;
  beforeEach(() => cy.visit('/'));

  it(`3.1 As a: customer,
  I want: to see a product card with price in euros
  so that: I can decide to purchase it or not`, () => {
    getProductPrice()
      .contains('Only')
      .and('contain', '€');
  });

  it(`3.3 As a: customer,
  I want: to see a product price also in dollars
  so that: I can compare prices`, () => {
    getProductPriceExRate()
      .contains('Also')
      .and('contain', '$');
  });

  it(`3.3 As a: customer,
  I want: to see a product price also in pounds
  so that: I can compare prices`, () => {
    getProductPriceExRate()
      .contains('or')
      .and('contain', '£');
  });
});
