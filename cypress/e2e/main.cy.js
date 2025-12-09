import login from "../support/pages/login"
import logout from "../support/pages/logout"
import navigation from "../support/pages/navigation"

describe("Logging In and flow", ()=>{
    beforeEach(()=>{
        login.visit()
        cy.wait(2000) 
       
    })
    it('Should login', ()=>{
        login.logIn()
        cy.wait(2000)
        login.submit()
        logout.logOut
    })
    it('Navigating through the website',()=>{
        login.logIn() 
        cy.wait(3000)
        login.submit()

        cy.log("we are navigating through the website along with assertions")
        
        navigation.appLogo()
        navigation.burger()
        navigation.scroll()
        cy.wait(3000)
        logout.logOut()
    })
})