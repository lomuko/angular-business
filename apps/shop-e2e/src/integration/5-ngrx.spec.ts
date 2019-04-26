import {
  getProductBuyButton,
  getShoppingCartItemsCount,
  getShoppingCartSave
} from '../support/home.po';

describe('5-NgRx', () => {
  const numProducts = 6;
  beforeEach(() => {
    cy.request('DELETE', 'http://localhost:3333/api/shopping-cart');
    cy.visit('/');
  });

  it(`5.1 As a: customer,
  I want: to add items to my shopping cart,
  so that: I can buy them`, () => {
    getProductBuyButton()
      .its('length')
      .should('be.at.least', numProducts);
  });

  it(`5.2 As a: customer,
  I want: to see the total units always updated,
  so that: I know how many items I will buy`, () => {
    getProductBuyButton()
      .first()
      .click();
    getShoppingCartItemsCount().should('have.text', '1');
  });

  it(`5.3 As a: customer,
  I want: to load my shopping cart from server,
  so that: I can see it anywhere`, () => {
    getShoppingCartItemsCount().should('have.text', '0');
  });

  it(`5.4 As a: customer,
  I want: to save my shopping cart to server,
  so that: I can see it anywhere`, () => {
    getProductBuyButton()
      .first()
      .click();
    getShoppingCartSave().click();
    cy.reload();
    getShoppingCartItemsCount().should('have.text', '1');
  });
});
