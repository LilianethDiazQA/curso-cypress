/* import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticacion, () => {
    it("Inicio de sesión válido", () => {

        Logger.stepNumber(1)
        Logger.step("Navegar a la pagina de incio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer click en 'Log in' en la barra de navegacion")
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        cy.wait(1000)
        Logger.step("Ingresar un nombre de usuario y contraseña válido")
        cy.wait(1000)
        LoginMethods.insertUsername(LoginData.validcredentials.username)
        cy.wait(1000)
        LoginMethods.insertPassword(LoginData.validcredentials.password)
        cy.wait(1000)

        Logger.stepNumber(4)
        Logger.step("Hacer click en 'Log in'para iniciar sesion")
        LoginMethods.clickOnLoginButton();
        Logger.verification("Verificar qye se redirige al usuario a la página de inicio")
        cy.wait(1000);
        CommonPageMethods.verifySignedUser(LoginData.validcredentials.username);
        cy.wait(1000);

        cy.wait(1000);
        Logger.postCondition('Log out');
        CommonPageMethods.logout();
        cy.wait(1000);

    })

    it("Inicio de sesión inválido", () => {

        Logger.stepNumber(1)
        Logger.step("Navegar a la pagina de incio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer click en 'Log in' en la barra de navegacion")
        CommonPageMethods.clickOnLoginOption();


        Logger.stepNumber(3)
        Logger.step("Ingresar un nombre de usuario y/o contraseña inválido")
        cy.wait(1000);
        LoginMethods.insertUsername(LoginData.validcredentials.username)
        cy.wait(1000);
        LoginMethods.insertPassword("contrasenainvalida")
        cy.wait(1000);

        Logger.stepNumber(4)
        Logger.step("Hacer click en 'Log in 'para iniciar sesion")
        LoginMethods.clickOnLoginButton();
        Logger.verification("Verificar que se muestra un mensaje de error indicando que el incio de sesion ha fallado")
        LoginMethods.verifyWrongPasswordMessage();
    })




}) */