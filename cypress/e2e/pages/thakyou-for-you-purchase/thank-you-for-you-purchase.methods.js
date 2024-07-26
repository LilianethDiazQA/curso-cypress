import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
    
    static clickOnOkButton () {
        ThankYouForYouPurchaseMethods.buttons.ok.click();

        }
    static verifyGrennCheckMarkisDisplayed(){
        ThankYouForYouPurchaseElements.icons.greenCheckMark.should('exist');
    }
    }
