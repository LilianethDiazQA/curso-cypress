import { CommonPageElements } from "../Common-page/common-page.elements";
import { CommonPageMethods } from "../Common-page/common-page.methods";
import { SignupElements } from "./signup.element";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke("val",username)
    }

    static insertPassword(password){
    SignupElements.textboxes.password.invoke('val',password)
}

    static clickOnSignUpButton(){
        SignupElements.buttons.signup.click();
    }

    static clickOnSignUpOption(){
        CommonPageElements.TopMenu.SignUp.click();
    }
    static signup (username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignupButton();

    }

    static verifySignUpSuccessfulMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("Sign up successful.");
    }
    
}