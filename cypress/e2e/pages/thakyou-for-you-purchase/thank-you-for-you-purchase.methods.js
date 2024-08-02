import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
    
    static clickOnOkButton(){
        cy.wait(1000);
        ThankYouForYouPurchaseElements.buttons.ok.click();


        }
    static verifyGrennCheckMarkisDisplayed(){
        ThankYouForYouPurchaseElements.icons.greenCheckMark.should("exist");
    }
    }
