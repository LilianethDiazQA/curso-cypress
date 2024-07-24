import { HomeElements } from './home.elements';

export class Homemethods{
    static clickOnPhoneOption() {
        HomeElements.categoriesMenu.phone.click()

    }

    static clickOnLaptopsOption() {
        HomeElements.categoriesMenu.laptots.click()
    }

    static clickOnMonitorsOption() {
        HomeElements.categoriesMenu.monitors.click()

    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();

    }
}