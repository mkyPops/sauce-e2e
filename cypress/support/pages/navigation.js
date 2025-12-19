import { NavigationSelectors } from "../selectors/navigationSelectors"

class navigation {
  appLogo() {
    cy.get(NavigationSelectors.appLogo).should('contain.text', 'Swag Labs')
  }

  burger() {
    cy.get(NavigationSelectors.burgerMenuButton).click()
    cy.get(NavigationSelectors.burgerMenuCloseButton).click()
  }

  scroll() {
    cy.scrollTo('bottom')
  }
}

export default new navigation