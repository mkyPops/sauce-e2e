import { LoginSelectors } from "../selectors/loginSelectors"

class logout{
    logOut(){
        cy.get(LoginSelectors.logOut).should('be.visible')
        cy.get(LoginSelectors.logOut).click({force:true})
        cy.contains('Logout').should('be.visible')
        cy.contains('Logout').click()
    }
    verifyLoggedOut(){
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.get(LoginSelectors.email).should('be.visible')
        cy.get(LoginSelectors.password).should('be.visible')
    }
}
export default new logout