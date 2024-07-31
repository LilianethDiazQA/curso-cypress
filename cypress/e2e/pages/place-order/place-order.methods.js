import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrdermethods {
    static insertName(name){
        PlaceOrderElements.textboxes.name.invoke("val",name);
    }

    static insertCountry(country){
        PlaceOrderElements.textboxes.country.invoke("val",country);
    }
 
    static inserCity(city){
        PlaceOrderElements.textboxes.city.invoke("val", city);
    }

    static insertCreditCard(creditCardNumbrer){
        PlaceOrderElements.textboxes.creditCard.invoke("val",creditCardNumbrer);
    }

    static insertMonth(month){
        PlaceOrderElements.textboxes.month.invoke("val",month);
    
    }

    static insertYear(year){
        PlaceOrderElements.textboxes.year.invoke("val",year);
        
    }

    static ClickOnCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }

    static ClickOnPurchaseButton(){

        PlaceOrderElements.buttons.purchase.click();
    }

    static insertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.inserCity(data.city)
        this.insertCreditCard(data.creditCardNumber)
        this.insertMonth(data.month)
        this.insertYear(data.year)

    }
        

    }