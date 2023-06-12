import 'cypress-metamask';
import 'cypress-file-upload';

// const dotenv = require('dotenv');
// const path = require('path');

// const customEnvPath = path.resolve(__dirname, '..', '..', '.env');
// dotenv.config({ path: envPath });

// Cypress.Commands.add('getEnv', (key) => {
//     return Cypress.env(key);
//   });

Cypress.Commands.add('hold', ()=>{
    cy.wait(2000);
});
Cypress.Commands.add('login', (email, password) => {
    cy.session('loginState', () => {
        const url= 'https://storagechain.io/sign-in';
        cy.visit(url);
        cy.get('#email')
            .type(email);
            cy.hold();
        cy.get('#password')
            .type(password);
            cy.hold();
            cy.get('.mt-5')
                .click();
        cy.get('#passphrase')
            .type('Nabeel@12345');
        cy.get('.align-items-center > .btn-secondary')
            .click();

                const loginState = {
                    email,
                    password,
                  };
                Cypress.env('loginState', loginState);
    });
});
