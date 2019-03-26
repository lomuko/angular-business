import { getGreeting, getProduct } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message from shop and api', () => {
    getGreeting().contains('Welcome to shop and Welcome to api!!');
  });

  it('should contains a product working component', () => {
    getProduct().contains('product works!');
  });
});
