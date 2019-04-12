import { getGreeting } from '../support/home.po';

describe('0-NX', () => {
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
});
