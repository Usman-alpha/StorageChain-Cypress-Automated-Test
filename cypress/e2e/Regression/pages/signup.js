import { faker } from '@faker-js/faker';


export class SignUp{
    //LOCATORs

    //Personal User Signup
    fullName_locator= '#name';
    email_locator= '#email';
    pwd_locator= '#password';
    confirmPwd_locator= '#confirmPassword';
    termsCheck_locator= '#default-checkbox';
    signupBtn_locator= '.mt-5';

    //Business User Signup
    businessTab_locator= '.false';
    bFullName_locator= '#name';
    bEmail_locator= '#email';
    bCompanyName_locator= '#companyName';
    bPosition_locator= '#position';
    bIndustryGrp_locator= ':nth-child(5) > .css-b62m3t-container > .custom-select__control';
    bEmployees_locator= ':nth-child(6) > .css-b62m3t-container > .custom-select__control';
    bPwd_locator= '#password';
    bConfirmPwd_locator= '#confirmPassword';
    salesCheck_locator= '#default-checkbox1';
    bTerms_locator= '#default-checkbox2';
    bSignupBtn_locator= '.mt-5';

    createAccountLink_locator= '.mt-30 > .text-warning';
    clickInSpace_locator= '.styles_leftColumn__uuID\+';

    //FUNCTIONs
    //Personal Signup functions
    pFullName(){
        const fakeFullName= faker.person.fullName();
        cy.get(this.fullName_locator)
            .type(fakeFullName);
    }
    pEmail(){
        const fakeEmail= faker.internet.email();
        cy.get(this.email_locator)
            .type(fakeEmail);
    }
    pPassword(pwdValue){
        cy.get(this.pwd_locator)
            .type(pwdValue) 
        return pwdValue;
    }
    pConfirmPassword(pwdValue){
        cy.get(this.confirmPwd_locator)
            .type(pwdValue);
    }
    checkTermsandConditions(){
        cy.get(this.termsCheck_locator)
            .check();
    }
    buttonClickerOne(){
        cy.get(this.signupBtn_locator)
            .click();
    }
    //Business Signup functions
    gotoSignup(){
        cy.get(this.createAccountLink_locator)
            .click();
    }
    gotoBusiness(){
        cy.get(this.businessTab_locator)
        .click();
    }
    bFullName(){
        const fakeeFullName= faker.person.fullName();
        cy.get(this.bFullName_locator)
            .type(fakeeFullName);
    }
    bEmail(){
        const fakeeEmail= faker.internet.email();
        cy.get(this.bEmail_locator)
            .type(fakeeEmail);
    }
    companyName(){
        const companyName = faker.company.buzzVerb();
        cy.get(this.bCompanyName_locator)
            .type(companyName);
    }
    position(){
        const pos = faker.company.buzzPhrase();
        cy.get(this.bPosition_locator)
            .type(pos);
    }
    // indGroupList() {
    //     cy.get(this.bIndustryGrp_locator)
    //       .click({ force: true })
    //       .then(() => {
    //         cy.contains('industry')
    //           .should('be.visible')
    //           .click();
    //         cy.wait(2000);
    //     });
    // }
    // indGroupList() {
    //     cy.viewport(1200, 800); // Adjust the viewport size as needed
    //     cy.get(this.bIndustryGrp_locator)
    //       .click({ force: true })
    //       .then(() => {
    //         cy.contains('industry')
    //           .should('be.visible')
    //           .click({ force: true });
    //         cy.wait(2000);
    //       });
    //   }
    // indGroupList() {
    //     cy.get(this.bIndustryGrp_locator)
    //       .trigger('mousedown', { force: true })
    //       .then(() => {
    //         cy.contains('industry')
    //           .should('be.visible')
    //           .trigger('mouseup', { force: true}).click();
    //       });
    //   }
    indGroupList() {
        cy.get(this.bIndustryGrp_locator)
          .trigger('mousedown', { force: true })
          .then(() => {
            cy.contains('industry')
              .should('be.visible')
              .invoke('show')
              .click();
        });
    }
    bPassword(bPwd){
        cy.get(this.bPwd_locator)
            .type(bPwd);
        return bPwd;
    }
    bConfirmPwd(bPwd){
        cy.get(this.bConfirmPwd_locator)
            .type(bPwd);
    }
    salesCheck(){
        cy.get(this.salesCheck_locator)
            .check();
    }
    checkTerms(){
        cy.get(this.bTerms_locator)
            .check();
    }
    buttonClickerTwo(){
        cy.get(this.bSignupBtn_locator)
            .click();
    }

}