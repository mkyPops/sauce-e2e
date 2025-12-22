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
        login.verifySuccessfulLogin()
        navigation.verifyInventoryPage()
        logout.logOut()
        logout.verifyLoggedOut()
    })
    it('Navigating through the website',()=>{
        login.logIn() 
        cy.wait(3000)
        login.submit()

        cy.log("we are navigating through the website along with assertions")
        
        login.verifySuccessfulLogin()
        navigation.verifyInventoryPage()
        navigation.appLogo()
        navigation.burger()
        navigation.scroll()
        cy.wait(3000)
        logout.logOut()
        logout.verifyLoggedOut()
    })
    it('Adding items to cart',()=>{
        cy.log('we are logging in')
        cy.wait(2000)
        login.logIn()
        cy.wait(1000)
        login.submit() 
        login.verifySuccessfulLogin()
        cy.wait(2000)
        
        AddToCart.ToCart()
        AddToCart.verifyCartBadgeCount('2')
        cy.wait(2000)
        
        AddToCart.pressingCart()
        AddToCart.verifyCartItemsCount(2)
        AddToCart.continueShopping()
        cy.wait(2000)
        
        AddToCart.pressingCart()
        cy.wait(2000)
        AddToCart.checkout()
        cy.wait(3000)
        
        checkOut.verifyCheckoutPage()
        checkOut.Continue()
        cy.wait(1000) 
        
        checkOut.verifyCheckoutOverview()
        checkOut.buying()
        cy.wait(2000)
        
        checkOut.finish()
        checkOut.verifyOrderComplete()
    })
})

describe("Negative Test Cases", ()=>{
    beforeEach(()=>{
        login.visit()
        cy.wait(2000)
    })

    it('Should validate login form with various invalid inputs', ()=>{
        // Test invalid credentials
        login.loginWithInvalidCredentials()
        login.verifyErrorMessage('Username and password do not match any user')
        cy.url().should('not.include', '/inventory.html')
        login.clearError()
        login.resetForm()
        
        // Test empty username
        login.loginWithEmptyUsername()
        login.verifyErrorMessage('Username is required')
        cy.url().should('not.include', '/inventory.html')
        login.clearError()
        login.resetForm()
        
        // Test empty password
        login.loginWithEmptyPassword()
        login.verifyErrorMessage('Password is required')
        cy.url().should('not.include', '/inventory.html')
        login.clearError()
        login.resetForm()
        
        // Test empty fields
        login.loginWithEmptyFields()
        login.verifyErrorMessage('Username is required')
        cy.url().should('not.include', '/inventory.html')
        login.clearError()
        
        // Test locked out user
        login.loginWithLockedOutUser()
        login.verifyErrorMessage('Sorry, this user has been locked out')
        cy.url().should('not.include', '/inventory.html')
    })

    it('Should validate checkout form with various invalid inputs', ()=>{
        // Setup: Login and add items to cart
        login.logIn()
        cy.wait(2000)
        login.submit()
        login.verifySuccessfulLogin()
        cy.wait(2000)
        
        AddToCart.ToCart()
        cy.wait(2000)
        AddToCart.pressingCart()
        cy.wait(2000)
        AddToCart.checkout()
        cy.wait(3000)
        
        checkOut.verifyCheckoutPage()
        
        // Test empty first name
        checkOut.submitWithEmptyFirstName()
        checkOut.verifyErrorMessage('First Name is required')
        cy.url().should('include', '/checkout-step-one.html')
        checkOut.clearError()
        checkOut.resetForm()
        
        // Test empty last name
        checkOut.submitWithEmptyLastName()
        checkOut.verifyErrorMessage('Last Name is required')
        cy.url().should('include', '/checkout-step-one.html')
        checkOut.clearError()
        checkOut.resetForm()
        
        // Test empty postal code
        checkOut.submitWithEmptyPostalCode()
        checkOut.verifyErrorMessage('Postal Code is required')
        cy.url().should('include', '/checkout-step-one.html')
        checkOut.clearError()
        checkOut.resetForm()
        
        // Test all fields empty
        checkOut.submitWithEmptyFields()
        checkOut.verifyErrorMessage('First Name is required')
        cy.url().should('include', '/checkout-step-one.html')
        checkOut.clearError()
    })
})
