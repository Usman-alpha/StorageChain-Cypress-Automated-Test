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
        cy.wrap({ email, password }).as('loginState');
    });
});