import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
    static navigateToDemoBlaze() {
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }

    static clickOnHomeOption() {
        CommonPageElements.TopMenu.home.click();
    }
    static clickOnContactOption() {
        CommonPageElements.TopMenu.contact.click();
    }
    static clickOnAboutUsOption() {
        CommonPageElements.TopMenu.aboutUs.click();

    }
    static clickOnCartOption() {
        CommonPageElements.TopMenu.cart.click();
    }
    static clickOnLoginOption() {
        CommonPageElements.TopMenu.login.click();
    }
   
    static clickOnSignUpOption() {
        CommonPageElements.TopMenu.SignUp.click();
 }

    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage);
       });
    }
    }