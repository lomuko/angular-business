const cy$ = (cy: string) => `[data-cy=${cy}]`;

export const getHeader = () => cy.get(cy$('cart-header'));
export const getListItems = () => cy.get(cy$('list-item'));
export const getProductSelector = () => cy.get(cy$('product-selector'));
export const getQuantityInput = () => cy.get(cy$('quantity-input'));
export const getAddButton = () => cy.get(cy$('add-button'));
export const getRemoveItemButton = () => cy.get(cy$('remove-item-button'));
export const getTotalUnitsDd = () => cy.get(cy$('total-units-dd'));
