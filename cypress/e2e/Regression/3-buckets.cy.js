import { faker } from '@faker-js/faker';
import { Buckets } from './pages/buckets';

const BucketObj= new Buckets(0);
describe('Buckets Regression Test.', () => {
    before(() => {
        cy.login('usman.malik@invozone.com', 'Nabeel@12345');
        cy.hold();
        cy.get('#passphrase')
            .type('Nabeel@12345');
        cy.get('.align-items-center > .btn-secondary')
            .click();
        cy.viewport(1320, 768);
        cy.title().should('eq', 'Storage Chain')
        cy.log("Test Start.");
    });
    it('Create a bucket', () => {
        cy.loginState;
        BucketObj.gotoBuckets();
        BucketObj.newBucket();
        BucketObj.enterBucketName();
        BucketObj.enterBucket();
    });
    after(() => {
        cy.log("Bucket Suite ended.");
    });
});