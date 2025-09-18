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
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Marcos',
    lastName: 'Vinicius',
    email: 'mv_souto@hotmail.com',
    text: 'Teste.'

}) => {
    cy.get("#firstName").type(data.firstName)
    cy.get("#lastName").type(data.lastName)
    cy.get("#email").type(data.email)
    cy.get("#phone").type('34992179041')
    cy.get("#open-text-area").type(data.text)
    cy.get('button[type="submit"]').click()
        
})