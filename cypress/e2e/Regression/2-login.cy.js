import { faker } from '@faker-js/faker';

describe('Login regression test.', () => {
    it('Login Test.', () => {
        cy.login('usman.malik@invozone.com', 'Nabeel@12345');
        cy.wait(3000);
        cy.get('#passphrase')
            .type('Nabeel@12345');
        cy.get('.align-items-center > .btn-secondary')
            .click();
    })
});