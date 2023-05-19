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

    clickInSpace_locator= '.styles_leftColumn__uuID\+';

    //FUNCTIONs
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
}