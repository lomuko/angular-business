import {
  getAddButton,
  getHeader,
  getListItems,
  getProductSelector,
  getQuantityInput,
  getRemoveItemButton,
  getTotalUnitsDd
} from '../support/shopping-cart.po';

describe('Shop Shopping-Cart', () => {
  beforeEach(() => cy.visit('/shopping-cart'));

  it('should display Shopping cart header', () => {
    getHeader().contains('Shopping Cart');
  });

  it('should start with no items in the cart', () => {
    getListItems().should('not.exist');
  });

  it('after 5 seconds should have one item in the cart', () => {
    const ms = 5000;
    cy.wait(ms);
    getListItems()
      .its('length')
      .should('be', 1);
  });

  it('after 10 seconds should have no items in the cart', () => {
    const ms = 10000;
    cy.wait(ms);
    getListItems().should('not.exist');
  });

  it('should allow to pick a product', () => {
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

  it('should allow to remove a product', () => {
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

  it('should count units', () => {
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
