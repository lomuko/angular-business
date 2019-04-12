import { getGreeting, getListHeader, getProductCard, getProductStock } from '../support/app.po';

describe('Warehouse Home', () => {
  const numProducts = 6;
  beforeEach(() => cy.visit('/'));

  it('should display welcome message from warehouse and api', () => {
    getGreeting().contains('Welcome to warehouse and Welcome to api!!');
  });

  it('should contains a product list working component', () => {
    getListHeader().contains('Product List');
  });

  it(`should contains at least ${numProducts} product cards`, () => {
    getProductCard()
      .its('length')
      .should('be.at.least', numProducts);
  });

  it(`3.1 should contains product cards with stock`, () => {
    getProductStock()
      .contains('Remains')
      .and('contain', 'units');
  });

  it(`3.2 should paint green for in stock products`, () => {
    getProductStock()
      .eq(1)
      .should('have.css', 'background-color')
      .and('eq', 'rgb(0, 128, 0)');
  });

  it(`3.2 should paint red for out of stock products`, () => {
    getProductStock()
      .eq(0)
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 0, 0)');
  });
});
