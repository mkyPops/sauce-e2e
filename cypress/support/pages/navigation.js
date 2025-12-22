import { NavigationSelectors } from "../selectors/navigationSelectors"

class navigation {
  appLogo() {
    cy.get(NavigationSelectors.appLogo).should('be.visible')
    cy.get(NavigationSelectors.appLogo).should('contain.text', 'Swag Labs')
  }

  burger() {
    cy.get(NavigationSelectors.burgerMenuButton).should('be.visible')
    cy.get(NavigationSelectors.burgerMenuButton).click()
    cy.get(NavigationSelectors.burgerMenuCloseButton).should('be.visible')
    cy.get(NavigationSelectors.burgerMenuCloseButton).click()
  }

  scroll() {
    cy.scrollTo('bottom')
  }

  verifyInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get(NavigationSelectors.inventoryContainer).should('be.visible')
    cy.get(NavigationSelectors.pageTitle).should('contain.text', 'Products')
  }
}

export default new navigation