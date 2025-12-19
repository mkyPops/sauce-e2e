import { LoginSelectors } from "../selectors/loginSelectors"

class logout{
    logOut(){
        cy.get(LoginSelectors.logOut).click({force:true})
        cy.contains('Logout').click()
    }
}
export default new logout