import { faker } from '@faker-js/faker';

export class Buckets{
    //LOCATORs
    bucketsOpt_locator= '[href="/buckets"]';
    newBucketBtn_locator= '.styles_header__SBBlP > button';
    bucketnameInp_locator= '#name';
    createBucketBtn_locator= '.btn-secondary';
    cancelBucketCreation_locator= '.btn-outline-light';
    menu_locator= '#react-aria9177201604-4';

    //FUNCTIONs
    gotoBuckets(){
        cy.get(this.bucketsOpt_locator)
            .click();
        cy.hold();
    }
    newBucket(){
        cy.get(this.newBucketBtn_locator)
        .click();
    }
    enterBucketName(){
        const randomBucket= faker.string.alphanumeric({ length: 7, casing: 'lower' });
        cy.get(this.bucketnameInp_locator)
            .type(randomBucket);
        cy.wait(1000);
    }
    enterBucket(){
        cy.get(this.createBucketBtn_locator)
            .click();
        cy.wait(5000);
        // cy.wrap(dynamicID).as('objectID');
    }
    // gotoBucketMenu(){
    //     cy.get(this.menu_locator)
    //         .click();
    // }
    // deleteBucket(){
    //     cy.get('@objectID').then((objectID) => {
    //         cy.get('.dropdown-menu > :nth-child(2)').click();
    //       });
    // }
    cancelBucketModel(){
        cy.get(this.cancelBucketCreation_locator)
            .click();
    }
}