import { getGreeting } from '../support/home.po';

describe('0-NX', () => {
  beforeEach(() => cy.visit('/'));

  it(`0.2 As a: customer,
  I want: to see a shop
  so that: I can buy products`, () => {
    cy.title().should('eq', 'Shop');
  });

  it(`0.2 As a: customer,
  I want: to be greeted
  so that: I feel at home`, () => {
    getGreeting().contains('Welcome to shop and Welcome to api!!');
  });
});
