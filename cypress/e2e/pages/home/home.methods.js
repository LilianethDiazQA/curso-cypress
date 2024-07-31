import { HomeElements } from './home.elements';

export class Homemethods{
    static clickOnPhoneOption() {
        HomeElements.categoriesMenu.phone.click();

    }

    static clickOnLaptopsOption() {
        HomeElements.categoriesMenu.laptots.click();
    }

    static clickOnMonitorsOption() {
        HomeElements.categoriesMenu.monitor.click();

    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();

    }
    static verifyProductDisplayed(productName){
        HomeElements.product(productName).should("be.visible");
    }

    static verifyHomePageIsShown(){
        cy.url().should('include', 'index.html');
    }

}