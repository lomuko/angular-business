import { getAddButton, getHeader, getListItems, getProductSelector, getQuantityInput, getRemoveItemButton, getTotalUnitsDd } from '../support/shopping-cart.po';

describe('2-Change', () => {
  beforeEach(() => cy.visit('/shopping-cart'));

  it(`2.0 As a: customer,
  I want: to see shopping cart page
  so that: i can browse my list of products`, () => {
    getHeader().contains('Shopping Cart');
  });

  it(`2.0 As a: customer,
  I want: to start with no items in the cart
  so that: i can add my own`, () => {
    getListItems().should('not.exist');
  });

  it(`2.0 As a: customer,
  I want: to wait 5 seconds
  so that: I can see early added products`, () => {
    const ms = 5000;
    cy.wait(ms);
    getListItems()
      .its('length')
      .should('be', 1);
  });

  it(`2.0 As a: customer,
  I want: to wait 10 seconds for auto remove
  so that: I have no items in the cart`, () => {
    const ms = 10000;
    cy.wait(ms);
    getListItems().should('not.exist');
  });

  it(`2.0 As a: customer,
  I want: to pick a product
  so that: I can add units to the shopping cart`, () => {
    getProductSelector()
      .type('Surface')
      .type('{enter}', {
        force: true
      });
    getQuantityInput()
      .clear()
      .type('3');
    getAddButton().click();
    getListItems()
      .its('length')
      .should('be', 1);
  });

  it(`2.0 As a: customer,
  I want: to remove a product from the shopping cart
  so that: I can take less units`, () => {
    getProductSelector()
      .type('Surface')
      .type('{enter}', {
        force: true
      });
    getQuantityInput()
      .clear()
      .type('3');
    getAddButton().click();
    getRemoveItemButton()
      .first()
      .click();
    getListItems().should('not.exist');
  });

  it(`2.0 As a: customer,
  I want: to see the current units
  so that: I can know what I'm buying`, () => {
    const units = 4;
    getProductSelector()
      .type('Surface')
      .type('{enter}', {
        force: true
      });
    getQuantityInput()
      .clear()
      .type(units.toString());
    getAddButton().click();
    getTotalUnitsDd().contains(units);
  });
});
