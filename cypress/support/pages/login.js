import { LoginSelectors } from "../selectors/loginSelectors"
import { NavigationSelectors } from "../selectors/navigationSelectors"

class login{
    visit(){
        cy.visit('/')
    }
    logIn(username = 'standard_user', password = 'secret_sauce'){
        cy.get(LoginSelectors.email).click().type(username,{delay:200})
        cy.get(LoginSelectors.password).click().type(password, {delay:300})
    }
    submit(){
        cy.get(LoginSelectors.submit).click()
    }
    verifySuccessfulLogin(){
        cy.url().should('include', '/inventory.html')
        cy.get(NavigationSelectors.inventoryContainer).should('be.visible')
    }
    verifyErrorMessage(expectedMessage){
        cy.get(LoginSelectors.errorMessage).should('be.visible')
        cy.get(LoginSelectors.errorMessage).should('contain.text', expectedMessage)
    }
    clearError(){
        cy.get(LoginSelectors.errorButton).click()
        cy.get(LoginSelectors.errorMessage).should('not.exist')
    }
    resetForm(){
        cy.get(LoginSelectors.email).clear()
        cy.get(LoginSelectors.password).clear()
    }
    loginWithInvalidCredentials(){
        this.logIn('invalid_user', 'invalid_password')
        this.submit()
    }
    loginWithEmptyFields(){
        this.submit()
    }
    loginWithEmptyUsername(){
        cy.get(LoginSelectors.password).click().type('secret_sauce', {delay:300})
        this.submit()
    }
    loginWithEmptyPassword(){
        cy.get(LoginSelectors.email).click().type('standard_user',{delay:200})
        this.submit()
    }
    loginWithLockedOutUser(){
        this.logIn('locked_out_user', 'secret_sauce')
        this.submit()
    }
}
export default new login 
