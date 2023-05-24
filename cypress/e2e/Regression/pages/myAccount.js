import { faker } from '@faker-js/faker';

export class Account{
//LOCATORs
dropdown_locator= 'img';
myAccount_locator= '.dropdown-menu > :nth-child(1) > .inactive';
uploadProfilePictureBtn_locator= '#file';

//FUNCTIONs
dropdownClicker(){
    cy.get(this.dropdown_locator)
        .click();
    cy.hold();
}
gotoAccounts(){
    cy.get(this.myAccount_locator)
        .click();
    cy.hold();
}

// uploadProfilePicture() {
//     cy.get(this.uploadProfilePictureBtn_locator)
//       .click().then((input) => {
//             cy.fixture('linclon.png').then((fileContent) => {
//             const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
//             const file = new File([blob], 'linclon.png', { type: 'image/png' });
//             cy.wrap(input).upload({ file, fileName: 'linclon.png', mimeType: 'image/png' });
//             })
//         });
//     }
}
