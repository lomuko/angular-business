const cy$ = (cy: string) => `[data-cy=${cy}]`;

export const getGreeting = () => cy.get('h1');
export const getListHeader = () => cy.get('[data-cy=list-header]');
export const getProductCard = () => cy.get('[data-cy=product-card]');
export const getProductPrice = () => cy.get('[data-cy=product-price]');
export const getProductPriceExRate = () => cy.get('[data-cy=product-price-exrate]');
export const getProductBuyButton = () => cy.get(cy$('product-buy-button'));
export const getShoppingCartItemsCount = () => cy.get(cy$('shoppingCartItemsCount-span'));
export const getShoppingCartSave = () => cy.get(cy$('shopping_cart-save-button'));
