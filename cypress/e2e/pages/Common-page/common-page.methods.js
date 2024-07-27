import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
    static navigateToDemoBlaze() {
        cy.visit(CommonPageData.url);
    }

    static clickOnHomeOption() {
        CommonPageElements.TopMenu.home.clic();
    }
    static clickOnContactOption() {
        CommonPageElements.TopMenu.contact.clic();
    }
    static clickOnAboutUsOption() {
        CommonPageElements.TopMenu.aboutUs.clic();

    }
    static clickOnCartOption() {
        CommonPageElements.TopMenu.cart.clic();
    }
    static clickOnLoginOption() {
        CommonPageElements.TopMenu.login.clic();
    }
   
    static clickOnSignUpOption() {
        CommonPageElements.TopMenu.signUp.clic();
 }
    }