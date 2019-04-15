import { getOutOfStockCounter, getProductRefillButton } from '../support/home.po';

describe('4-Redux', () => {
  beforeEach(() => cy.visit('/'));

  it(`4.2 As a: seller,
  I want: to know how many products are out of stock
  so that: I can refill them`, () => {
    const expectedProducts = 2;
    const outOfStockCounter = getOutOfStockCounter();
    outOfStockCounter
      .children()
      .first()
      .contains(expectedProducts);
    outOfStockCounter.click({
      force: true
    });
    getProductRefillButton()
      .its('length')
      .should('be', expectedProducts);
  });

  it(`4.2 As a: seller,
  I want: to refill a product
  so that: I can sell more units`, () => {
    getOutOfStockCounter().click();
    getProductRefillButton()
      .its('length')
      .then(numProducts => {
        getProductRefillButton()
          .first()
          .click();
        getProductRefillButton()
          .its('length')
          .should('be', numProducts - 1);
      });
  });
});
