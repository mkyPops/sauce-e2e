class navigation{
    appLogo(){
        cy.get('.app_logo').should('contain.text', 'Swag Labs')
    }
    burger(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('#react-burger-cross-btn').click()
    }
    scroll(){
        cy.scrollTo('bottom')
        
    }
}
export default new navigation