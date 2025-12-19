import { CheckOutSelectors } from "../selectors/checkOutSelectors"

class CheckingOut{
    Continue(){
        cy.get('#first-name').click()
        cy.get('#first-name').type("Mashaal Khan",{delay:300})
        cy.get('#last-name').click()
        cy.get('#last-name').type("Yousafzai",{delay:300})
        cy.get('#postal-code').click()
        cy.get('#postal-code').type('25000',{delay:300})
    }
    buying(){
        cy.get(CheckOutSelectors.continueButton).should('be.visible')
        cy.get(CheckOutSelectors.continueButton).click()
    }
    finish(){
        cy.get(CheckOutSelectors.finishButton).should('be.visible')
        cy.get(CheckOutSelectors.finishButton).click()
    }

}
export default new CheckingOut 