import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()

    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }
//este metodo se busco en la documentación de cypress
    static verifyCardPageIsShown(){
        cy.url().should('include', 'cart.html')
    }
    static ClickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }

}

