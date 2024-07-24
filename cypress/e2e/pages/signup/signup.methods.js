import { SignupElements } from "./signup.element";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke("val",username)
    }

    static insertPassword(password){
    SignupElements.textboxes.password.invoke('val',password)
}

    static clickOnSignupButton(){
        SignupElements.buttons.signup.click();
    }

    static signup (username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignupButton();

    }
}