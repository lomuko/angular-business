import { getGreeting, getListHeader, getProductCard, getProductPrice, getProductPriceExRate } from '../support/app.po';

describe('Shop Home', () => {
  const numProducts = 6;
  beforeEach(() => cy.visit('/'));

  it(`0.2 As a: customer,
  I want: to see a shop
  so that: I can buy products`, () => {
    cy.title().should('eq', 'Shop');
  });

  it(`0.2 As a: customer,
  I want: to be greeted
  so that: I feel at home`, () => {
    getGreeting().contains('Welcome to shop and Welcome to api!!');
  });

  it(`2.2 As a: customer,
  I want: to see a product list
  so that: I feel confident with page`, () => {
    getListHeader().contains('Product List');
  });

  it(`2.2 As a: customer,
  I want: to see at least ${numProducts} products
  so that: I feel confident with data`, () => {
    getProductCard()
      .its('length')
      .should('be.at.least', numProducts);
  });

  it(`3.1 As a: customer,
  I want: to see a product card with price in euros
  so that: i can decide to purchase it or not`, () => {
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
