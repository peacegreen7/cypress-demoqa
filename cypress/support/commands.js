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

Cypress.Commands.add('createUser', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/User',
        headers: {
            contentType: 'application/json'
        },
        body: {
            userName: username,
            password: password
        }
    }).then((resp) => {
        const userInfo = resp.body;
        cy.log("username: ", userInfo.username)
    })
})

Cypress.Commands.add('generateToken', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/GenerateToken',
        headers: {
            contentType: 'application/json'
        },
        body: {
            userName: username,
            password: password
        }
    }).then(resp => {
        cy.log('token: ' + resp.body.token)
    })
})

Cypress.Commands.add('loginViaAPI', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/Login',
        headers: {
            contentType: 'application/json'
        },
        body: {
            userName: username,
            password: password
        }
    }).then(resp => {
        cy.log('token: ' + resp.body.token)
    })
})