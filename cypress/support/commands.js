// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
Cypress.Commands.add('loginpage', () => {
    cy.visit("http://localhost:4200/login")
    //Writing the Assertions for the URL
    cy.url().should('include','http://localhost:4200/login')
    //enter invalid user name
    cy.get('input[formcontrolname="email"]').type('cvtrtest1@convertr.io')
        // enter invalid password
    cy.get('input[type="password"]').type('Password!23')
        //Click on sign in button
    cy.get('button[type="submit"]').click()
    cy.contains(' Your Feed ').should('be.visible')

})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//   // signout
Cypress.Commands.add('logout', () => {
    cy.get('a[ng-reflect-router-link="/settings"]').click()
    cy.get('.btn.btn-outline-danger').click()
    cy.get('a[routerlink="/login"]').should('have.text',' Sign in ')
})
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })