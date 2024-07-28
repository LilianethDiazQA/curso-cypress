import { Logger } from "../../util/logger";
import { CommonPageElements } from "../Common-page/common-page.elements";
import { CommonPageMethods } from "../Common-page/common-page.methods";
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

    static clickOnLoginOption(){
        CommonPageElements.TopMenu.login.click()
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

    static verifyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert("Wrong password.");
    }
}