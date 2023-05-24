import { faker } from '@faker-js/faker';
import { Account } from './pages/myAccount';

const AccountObj= new Account();

describe('My Account Regression test.', () => {
    before(() => {
        cy.login('usman.malik@invozone.com', 'Nabeel@12345');
        cy.hold();
        cy.get('#passphrase')
            .type('Nabeel@12345');
        cy.get('.align-items-center > .btn-secondary')
            .click();
        cy.viewport(1320, 768);
        cy.title().should('eq', 'Storage Chain')
        cy.log("My Account Test Suite started");
        cy.wait(5000);
    });
    it('Navigate to my account.', () => {
        AccountObj.dropdownClicker();
        AccountObj.gotoAccounts();
    });
    it('Profile Picture.', () => {
        cy.fixture('image.png', 'base64').then((fileContent) => {
            cy.get('#file').attachFile({ fileContent, fileName: 'image.png', mimeType: 'image/png' });
          });
          
          
        // const fileName = 'linclon.jpeg';

        // cy.fixture(fileName).then((fileContent) => {
        //   cy.get('.custom-upload-btn').then((input) => {
        //     // Convert the file content to a Blob
        //     const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/png');
        //     const testFile = new File([blob], fileName);
    
        //     // Trigger the file input change event and upload the file
        //     cy.wrap(input).trigger('change', { force: true }).then(() => {
        //       // Set the file(s) to upload
        //       cy.window().then((win) => {
        //         const dataTransfer = new DataTransfer();
        //         dataTransfer.items.add(testFile);
        //         input[0].files = dataTransfer.files;
        //       });
    
        //       // Submit the form or perform any required actions to complete the upload
        //       // For example, click a "Submit" button if present
        //       cy.get('.form-fields > .btn').click();
        //     });
        //   });
        // });

        // cy.get('input[type="file"][id="file"]').click().then(()=> {
        //     cy.get('input[type="file"][id="file"]').selectFile('cypress/fixtures/linclon.jpeg', {force: true});
        // })
        // cy.get('#file').click();
    });
    after(() => {
        cy.log("My Account Test Suite ended.")
    });
});