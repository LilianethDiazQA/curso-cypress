import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);


describe (CommonPageData.testSuites.registroYAutenticacion,()=>{
    it ('Registro de usuario válido',()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();
    
        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegacion')
        cy.wait(2000);
        CommonPageMethods.clickOnSignUpOption();
    
        Logger.stepNumber(3)
        Logger.step('Completar los campos obligattorios con informacion valida')
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(password)
    
        Logger.stepNumber(4)
        Logger.step('Hacer click en el boton SignUp')
        SignupMethods.clickOnSignUpButton();
        cy.wait(2000);
        SignupMethods.verifySignUpSuccessfulMessageIsDisplayed();
    });
}

);