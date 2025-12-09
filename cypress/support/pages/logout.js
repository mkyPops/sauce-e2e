class logout{
    logOut(){
        cy.get('#react-burger-menu-btn').click({force:true})
        cy.contains('Logout').click()
    }
}
export default new logout