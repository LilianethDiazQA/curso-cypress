import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.type(username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }
    /* static login (username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    } */
    static login (username,password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }
}