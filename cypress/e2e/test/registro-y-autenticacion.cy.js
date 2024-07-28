import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";

describe (CommonPageData.testSuites.registroYAutenticacion,()=>{
    it ('Registro de usuario válido',()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();
    
        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegacion')
        cy.wait(20000);
        CommonPageMethods.clickOnSignUpOption();
    
        Logger.stepNumber(3)
        Logger.step('Completar los campos obligattorios con informacion valida')
        SignupMethods.insertUsername('monis')
        SignupMethods.insertPassword('monis')
    
        Logger.stepNumber(4)
        Logger.step('Hacer click en el boton SignUp')
        SignupMethods.clickOnSignUpButton();
        cy.wait(20000);
        SignupMethods.verifySignUpSuccessfulMessageIsDisplayed();
    });
   
    

});