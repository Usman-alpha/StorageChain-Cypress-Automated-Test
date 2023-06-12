import { faker } from '@faker-js/faker';
// require('dotenv').config();

// const path = require('path');
// const dotenv = require('dotenv');

// Load environment variables from the .env file
// dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

// Access the environment variable
// const password = process.env.PASSWORD;
// const password = Cypress.env('PASSWORD')

describe('Login regression test.', () => {
    it('Login Test.', () => {
        cy.login('usman.malik@invozone.com', 'Nabeel@12345');
        cy.wait(3000);
        const loginState = Cypress.env('loginState');
        cy.wait(6000);
    })
    it('Connect Wallet.', () => {
        const loginState = Cypress.env('loginState');
        cy.wait(3000);
        cy.get('.styles_right__TRdkA > .d-flex').click();
        cy.get(() => {
            return cy.get('[data-cy="metamask-connected"]').isPresent()     
        })

//   cy.get('#password').type(password);
//   cy.get('[data-cy="metamask-connected"]').should('exist');

        // cy.task('getEnvVariable', 'PASSWORD').then((password) => {
        //     cy.get('#password').type(password);
        //   });
        // cy.get('[data-cy="metamask-connected"]').should('exist');

        // cy.getEnv('SECRET_WORDS').then((secretWords) => {
        //     // Use the secretWords variable in your test logic
        //     // ...
        //   });
    })
});