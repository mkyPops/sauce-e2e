import AddToCart from "../support/pages/AddToCart"
import checkOut from "../support/pages/checkOut"
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
    it('Adding items to cart',()=>{
        cy.log('we are loggig in')
        cy.wait(2000)
        login.logIn()
        cy.wait(1000)
        login.submit() 
        cy.wait(4000)
        AddToCart.ToCart()
        cy.wait(4000)
        AddToCart.pressingCart()
        AddToCart.continueShopping()
        cy.wait(3000)
        AddToCart.pressingCart()
        cy.wait(4000)
        AddToCart.checkout()
        cy.wait(5000)
        checkOut.Continue()
        cy.wait(1000)

    })
}) 
