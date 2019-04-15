export const getGreeting = () => cy.get('h1');
export const getListHeader = () => cy.get('[data-cy=list-header]');
export const getProductCard = () => cy.get('[data-cy=product-card]');
export const getProductStock = () => cy.get('[data-cy=product-stock]');
export const getOutOfStockCounter = () => cy.get('[data-cy=out_of_stock-badge]');
