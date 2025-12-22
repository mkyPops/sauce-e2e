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

  verifyCartBadgeCount(expectedCount) {
    cy.get(AddToCartSelectors.cartBadge).should('be.visible')
    cy.get(AddToCartSelectors.cartBadge).should('contain.text', expectedCount)
  }

  verifyCartItemsCount(expectedCount) {
    cy.get(AddToCartSelectors.cartItem).should('have.length', expectedCount)
  }

  verifyCartIsEmpty() {
    cy.get(AddToCartSelectors.cartBadge).should('not.exist')
  }

  verifyItemInCart(itemName) {
    cy.get(AddToCartSelectors.cartItem).should('contain.text', itemName)
  }

  removeItemFromCart(index = 0) {
    cy.get(AddToCartSelectors.removeButton).eq(index).click()
  }

  verifyInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get(AddToCartSelectors.inventoryAddButton).should('be.visible')
  }
}

export default new AddToCart