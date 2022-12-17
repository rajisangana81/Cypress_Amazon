class login
{
    openurl()
    {
        return cy.visit("http://localhost:4200/login")
    }
    enterWrongEmail()
    {
        return cy.get('input[formcontrolname="email"]')

    }
    enterWrongPassword()
    {
        return cy.get('input[type="password"]')
    }
    clickSignIn()
    {
        return cy.get('button[class="btn btn-lg btn-primary pull-xs-right"]').click()
    }
    Verifying_Invalid()
    {
        return cy.get('.error-messages').should('have.text',' email or password is invalid ')
        
    }
    clearDataemail()
    {
        return cy.get('input[formcontrolname="email"]').clear()
    
    }
    enterCorrectemail()
    {
        return cy.get('input[formcontrolname="email"]')
    }
    clearDatapassword()
    {
        return cy.get('input[type="password"]').clear()
    }
    enterCorrectpassword()
    {
        return cy.get('input[type="password"]')
    }
    clickButton()
    {
        return cy.get('button[class="btn btn-lg btn-primary pull-xs-right"]').click()
    }
    verifying_Valid()
    {
        return cy.get('.navbar-brand').should('be.visible')
    }

}
export default login;