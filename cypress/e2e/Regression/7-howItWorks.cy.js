describe('How it works.', () => {
    before(() => {
        cy.login('usman.malik@invozone.com', 'Nabeel@12345');
        cy.viewport(1320, 768);
        cy.title().should('eq', 'Storage Chain')
        cy.log("Test Start.");
        cy.hold();
        cy.get('#passphrase')
            .type('Nabeel@12345');
        cy.get('.align-items-center > .btn-secondary')
            .click();
    });
    it('Test for how it works navs.', () => {
        cy.loginState;
        cy.get('[href="/faq"]')
            .click();
        cy.wait(1000);
        cy.scrollTo(0, 1000);
        cy.wait(3000);
        // cy.get('#upload > .p-30 > .align-items-md-end > .tab-menu > [href="#host-a-node"]').click();
        // cy.hold();
        // cy.get('#upload > .p-30 > .align-items-md-end > .tab-menu > [href="#nft-minting"]')
        //     .click();
        // cy.hold();
        // cy.get('#upload > .p-30 > .align-items-md-end > .tab-menu > [href="#pricing"]')
        //     .click();
        // cy.hold();
        // cy.get('#upload > .p-30 > .align-items-md-end > .tab-menu > .active')
        //     .click();
    });
});