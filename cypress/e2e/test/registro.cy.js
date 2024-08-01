import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validcredentials.username


xdescribe (CommonPageData.testSuites.registro,()=>{
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
        Logger.verification ("Verificar que se muestre el mensaje 'SignUp Successful'")
        SignupMethods.verifySignUpSuccessfulMessageIsDisplayed();
    });

    it ('Registro de usuario inválido',()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();
    
        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegacion')
        cy.wait(2000);
        CommonPageMethods.clickOnSignUpOption();
    
        Logger.stepNumber(3)
        Logger.step('Completar los campos obligattorios con informacion inválida')
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)
    
        Logger.stepNumber(4)
        Logger.step('Hacer click en el boton SignUp')
        SignupMethods.clickOnSignUpButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando los campos invalidos')
        SignupMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed();
       
    });
}

);