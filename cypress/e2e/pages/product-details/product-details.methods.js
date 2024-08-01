import { CommonPageMethods } from "../Common-page/common-page.methods";
import { ProductDetailsElementes } from "./product-details.elements";

export class ProductDetailsMethods{
    static clicOnAddtocartButton(){
        ProductDetailsElementes.buttons.addToCart.click();

    }

    static verifyProductDetailsPageDisplayed(){
        ProductDetailsElementes.buttons.addToCart.should("be.visible");
    }

    static verifyProductAddedMesaage(){
        CommonPageMethods.verifyAlert("Product added.");
    }
}