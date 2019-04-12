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

  it(`should contains product cards with stock`, () => {
    getProductStock()
      .contains('Remains')
      .and('contain', 'units');
  });
});
