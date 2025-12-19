import { LoginSelectors } from "../selectors/loginSelectors"

class login{
    visit(){
        cy.visit('/')
    }
    logIn(){
        cy.get(LoginSelectors.email).click().type('standard_user',{delay:200})
        cy.get(LoginSelectors.password).click().type('secret_sauce', {delay:300})
    }
    submit(){
        cy.get(LoginSelectors.submit).click()
    } 
}
export default new login 
