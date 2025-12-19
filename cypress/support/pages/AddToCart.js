import { AddToCartSelectors } from "../selectors/addToCartSelectors"

class AddToCart {
  ToCart() {
    cy.get(AddToCartSelectors.inventoryAddButton).eq(0).click()
    cy.get(AddToCartSelectors.inventoryAddButton).eq(1).click()
  }

  pressingCart() {
    cy.get(AddToCartSelectors.cartContainer).click()
  }

  continueShopping() {
    cy.get(AddToCartSelectors.continueShoppingButton).click()
  }

  checkout() {
    cy.get(AddToCartSelectors.checkoutButton).click()
  }
}

export default new AddToCart