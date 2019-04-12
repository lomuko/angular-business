import { getListHeader, getProductCard } from '../support/home.po';

describe('1-Test', () => {
  const numProducts = 6;
  beforeEach(() => cy.visit('/'));

  it(`1.2 As a: seller,
  I want: to see a product list
  so that: I feel confident with the page`, () => {
    getListHeader().contains('Product List');
  });

  it(`1.2 As a: seller,
  I want: to see at least ${numProducts} products
  so that: I feel confident with data`, () => {
    getProductCard()
      .its('length')
      .should('be.at.least', numProducts);
  });
});
