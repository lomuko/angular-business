import { getProductStock } from '../support/home.po';

describe('3-Template', () => {
  beforeEach(() => cy.visit('/'));

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
