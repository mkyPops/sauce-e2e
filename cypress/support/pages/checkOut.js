class CheckingOut{
    Continue(){
        cy.get('#first-name').click()
        cy.get('#first-name').type("Mashaal Khan",{delay:500})
        cy.wait(3500)
        cy.get('#last-name').click()
        cy.get('#last-name').type("Yousafzai",{delay:500})
        cy.wait(3000)
        cy.get('#postal-code').click()
        cy.get('#postal-code').type('250000',{delay:500})
    }

}
export default new CheckingOut 