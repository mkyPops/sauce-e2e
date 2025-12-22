import { CheckOutSelectors } from "../selectors/checkOutSelectors"

class CheckingOut{
    Continue(firstName = "Mashaal Khan", lastName = "Yousafzai", postalCode = '25000'){
        cy.get(CheckOutSelectors.firstNameInput).click()
        cy.get(CheckOutSelectors.firstNameInput).type(firstName,{delay:300})
        cy.get(CheckOutSelectors.lastNameInput).click()
        cy.get(CheckOutSelectors.lastNameInput).type(lastName,{delay:300})
        cy.get(CheckOutSelectors.postalCodeInput).click()
        cy.get(CheckOutSelectors.postalCodeInput).type(postalCode,{delay:300})
    }
    buying(){
        cy.get(CheckOutSelectors.continueButton).should('be.visible')
        cy.get(CheckOutSelectors.continueButton).click()
    }
    finish(){
        cy.get(CheckOutSelectors.finishButton).click()
    }
    verifyCheckoutPage(){
        cy.url().should('include', '/checkout-step-one.html')
        cy.get(CheckOutSelectors.firstNameInput).should('be.visible')
        cy.get(CheckOutSelectors.lastNameInput).should('be.visible')
        cy.get(CheckOutSelectors.postalCodeInput).should('be.visible')
    }
    verifyCheckoutOverview(){
    }
    verifyOrderComplete(){
        cy.url().should('include', '/checkout-complete.html')
        cy.contains('Thank you for your order!').should('be.visible')
    }
    submitWithEmptyFields(){
        cy.get(CheckOutSelectors.firstNameInput).clear()
        cy.get(CheckOutSelectors.lastNameInput).clear()
        cy.get(CheckOutSelectors.postalCodeInput).clear()
        cy.get(CheckOutSelectors.continueButton).click()
    }
    submitWithEmptyFirstName(lastName = "Yousafzai", postalCode = '25000'){
        cy.get(CheckOutSelectors.lastNameInput).clear().type(lastName,{delay:300})
        cy.get(CheckOutSelectors.postalCodeInput).clear().type(postalCode,{delay:300})
        cy.get(CheckOutSelectors.continueButton).click()
    }
    submitWithEmptyLastName(firstName = "Mashaal Khan", postalCode = '25000'){
        cy.get(CheckOutSelectors.firstNameInput).clear().type(firstName,{delay:300})
        cy.get(CheckOutSelectors.postalCodeInput).clear().type(postalCode,{delay:300})
        cy.get(CheckOutSelectors.continueButton).click()
    }
    submitWithEmptyPostalCode(firstName = "Mashaal Khan", lastName = "Yousafzai"){
        cy.get(CheckOutSelectors.firstNameInput).clear().type(firstName,{delay:300})
        cy.get(CheckOutSelectors.lastNameInput).clear().type(lastName,{delay:300})
        cy.get(CheckOutSelectors.continueButton).click()
    }
    verifyErrorMessage(expectedMessage){
        cy.get(CheckOutSelectors.errorMessage).should('be.visible')
        cy.get(CheckOutSelectors.errorMessage).should('contain.text', expectedMessage)
    }
    clearError(){
        cy.get(CheckOutSelectors.errorButton).click()
        cy.get(CheckOutSelectors.errorMessage).should('not.exist')
    }
    resetForm(){
        cy.get(CheckOutSelectors.firstNameInput).clear()
        cy.get(CheckOutSelectors.lastNameInput).clear()
        cy.get(CheckOutSelectors.postalCodeInput).clear()
    }
}
export default new CheckingOut 