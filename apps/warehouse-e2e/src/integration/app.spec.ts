import { getGreeting, getListHeader, getProductCard } from '../support/app.po';

describe('Warehouse Home', () => {
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
});
