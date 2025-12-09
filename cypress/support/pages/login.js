class login{
    visit(){
        cy.visit('/')
    }
    logIn(){
        cy.get('[placeholder="Username"]').click().type('standard_user',{delay:200})
        cy.get('[placeholder="Password"]').click().type('secret_sauce', {delay:300})
    }
    submit(){
        cy.get('.submit-button.btn_action').click()
    } 
}
export default new login 
