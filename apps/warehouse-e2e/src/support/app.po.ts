export const getGreeting = () => cy.get('h1');
export const getProductListHeader = () =>
  cy.get(
    'body > angular-business-root > angular-business-shell > mat-sidenav-container > mat-sidenav-content > angular-business-home > div > h1'
  );
