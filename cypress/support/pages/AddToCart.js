class AddToCart{
    ToCart(){
        cy.get('.btn.btn_primary.btn_small.btn_inventory ').eq(0).click()
        cy.wait(4000)
        cy.get('.btn.btn_primary.btn_small.btn_inventory ').eq(1).click()
        cy.wait(4000)
    }
}
export default new AddToCart