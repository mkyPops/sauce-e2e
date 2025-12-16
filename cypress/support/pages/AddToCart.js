class AddToCart{
    ToCart(){
        cy.get('.btn.btn_primary.btn_small.btn_inventory ').eq(0).click()
        cy.wait(4000)
        cy.get('.btn.btn_primary.btn_small.btn_inventory ').eq(1).click()
        cy.wait(4000)
    }
    pressingCart(){
        cy.get('.shopping_cart_container').click()
    }
    continueShopping(){
        cy.get('#continue-shopping').click()

    }
    checkout(){
        cy.get('#checkout').click()
    }
     
}
export default new AddToCart