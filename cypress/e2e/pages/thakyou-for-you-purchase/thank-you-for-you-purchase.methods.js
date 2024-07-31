import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
    
    static clickOnOkButton(){
        return cy.contains('button', 'OK').click();

        }
    static verifyGrennCheckMarkisDisplayed(){
        ThankYouForYouPurchaseElements.icons.greenCheckMark.should("exist");
    }
    }
