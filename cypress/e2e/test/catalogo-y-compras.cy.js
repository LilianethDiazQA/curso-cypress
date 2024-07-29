import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { Homemethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

const user = LoginData.validcredentials;

describe (CommonPageData.testSuites.catalogoyCompra, ()=>{
    it ('Navegacion por categorias', ()=>{

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como usuario registrado")
        Logger.subStep("Navegate to Demoblaze application")
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep("Click on 'Log in' link")
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username,user.password)

        Logger.stepNumber(2)
        Logger.step ('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step ("Seleccionar una categoria de productos en el menu de navegacion")
        Homemethods.clickOnMonitorsOption();
        Logger.verification("Verificar que se muestra la lista de productos correspondientes")
        Homemethods.verifyProductDisplayed("Apple monitor 24")
        Homemethods.verifyProductDisplayed("ASUS Full HD")
    })
})