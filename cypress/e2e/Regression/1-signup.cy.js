import { faker } from '@faker-js/faker';
import {SignUp, Signup} from './pages/signup';

const SignupObj= new SignUp();
describe('Signup regression test.', () => {
    beforeEach(() => {
        const url= 'https://storagechain.io/sign-up';
        cy.visit(url);
        cy.url().should('eq', 'https://storagechain.io/sign-up');
            cy.hold();
        cy.viewport(1320, 768);
        cy.title().should('eq', 'Storage Chain')
        cy.log("Test Start.");
    });
    it('Personal Account- Signup with valid credentials.', () => {
        SignupObj.pFullName();
            cy.hold();
        SignupObj.pEmail();
            cy.hold();

        const password= "Password@123";
        const mappedValue= SignupObj.pPassword(password);
            cy.wait(1000);
        SignupObj.pConfirmPassword(mappedValue);
            cy.wait(1000);
        SignupObj.checkTermsandConditions();
            cy.hold();
        SignupObj.buttonClickerOne();
            cy.wait(3000);
        cy.log("Signup successfull. User prompted to login page.")
        cy.url().should('eq', 'https://storagechain.io/sign-in');

    });
    afterEach(() => {
        cy.log("Test End.");
    });
});
