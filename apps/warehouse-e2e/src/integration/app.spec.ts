import { getGreeting, getListHeader, getProductCard, getProductStock } from '../support/app.po';

describe('Warehouse Home', () => {
  const numProducts = 6;
  beforeEach(() => cy.visit('/'));

  it(`0.2 As a: seller,
  I want: to see a warehouse
  so that: I can take control`, () => {
    cy.title().should('eq', 'Warehouse');
  });

  it(`0.2 As a: seller,
  I want: to be greeted
  so that: I feel at home`, () => {
    getGreeting().contains('Welcome to warehouse and Welcome to api!!');
  });

  it(`2.2 As a: seller,
  I want: to see a product list
  so that: I feel confident with page`, () => {
    getListHeader().contains('Product List');
  });

  it(`2.2 As a: seller,
  I want: to see at least ${numProducts} products
  so that: I feel confident with data`, () => {
    getProductCard()
      .its('length')
      .should('be.at.least', numProducts);
  });

  it(`3.1 As a: seller,
  I want: to see a product card with stock
  so that: I can ask for more or not`, () => {
    getProductStock()
      .contains('Remains')
      .and('contain', 'units');
  });

  it(`3.2 As a: seller,
  I want: to see a green mark on products with stock
  so that: I know I don't do need to refill`, () => {
    getProductStock()
      .eq(1)
      .should('have.css', 'background-color')
      .and('eq', 'rgb(0, 128, 0)');
  });

  it(`3.2 As a: seller,
  I want: to see a red mark on products with out stock
  so that: I know I need to refill`, () => {
    getProductStock()
      .eq(0)
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 0, 0)');
  });
});
