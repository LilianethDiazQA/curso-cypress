import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { Homemethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { PlaceOrdermethods } from "../pages/place-order/place-order.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { ThankYouForYouPurchaseElements } from "../pages/thakyou-for-you-purchase/thank-you-for-you-purchase.elements";
import { ThankYouForYouPurchaseMethods } from "../pages/thakyou-for-you-purchase/thank-you-for-you-purchase.methods";
import { Logger } from "../util/logger";

const user = LoginData.validcredentials;
const product = "ASUS Full HD";
const thankYouElements = new ThankYouForYouPurchaseElements();

describe(CommonPageData.testSuites.catalogoyCompra, () => {
    it('Navegacion por categorias', () => {

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como usuario registrado")
        Logger.subStep("Navegate to Demoblaze application")
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep("Click on 'Log in' link")
        cy.wait(3000);
        CommonPageMethods.clickOnLoginOption();
        cy.wait(3000);
        LoginMethods.login(user.username, user.password)
        LoginMethods.clickOnLoginButton;
        cy.wait(3000);

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step("Seleccionar una categoria de productos en el menu de navegacion")
        Homemethods.clickOnMonitorsOption();
        Logger.verification("Verificar que se muestra la lista de productos correspondientes")
        Homemethods.verifyProductDisplayed("Apple monitor 24")
        Homemethods.verifyProductDisplayed("ASUS Full HD")
    })

    it('Agregar productos al carrito', () => {

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como usuario registrado")
        Logger.subStep("Navegate to Demoblaze application")
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep("Click on 'Log in' link")
        CommonPageMethods.clickOnLoginOption();
        cy.wait(3000)
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step("Seleccionar una categoria de productos en el menu de navegacion")
        Homemethods.clickOnMonitorsOption();

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto especifico')
        Homemethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification("Verificar que se muestra la pagina de detalles del producto")
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer click en boton Add to cart')
        ProductDetailsMethods.clicOnAddtocartButton();

        Logger.stepNumber(7)
        Logger.verification("Verificar que se muestra mensaje de confirmacion y el producto se agrega a el carrito")
        ProductDetailsMethods.verifyProductAddedMesaage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);


    })

    it('Realizar una compra', () => {

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como usuario registrado")
        Logger.subStep("Navegate to Demoblaze application")
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep("Click on 'Log in' link")
        CommonPageMethods.clickOnLoginOption();
        cy.wait(3000)
        LoginMethods.login(user.username, user.password)
        cy.wait(1000)
        LoginMethods.clickOnLoginButton;
        cy.wait(3000)

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        
        cy.wait(3000)
        CommonPageMethods.clickOnHomeOption();
        cy.wait(3000)


        Logger.stepNumber(3)
        Logger.step("Seleccionar una categoria de productos en el menu de navegacion")
        cy.wait(3000)
        Homemethods.clickOnMonitorsOption();

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto especifico')
        Homemethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification("Verificar que se muestra la pagina de detalles del producto")
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer click en boton Add to cart')
        ProductDetailsMethods.clicOnAddtocartButton();

        Logger.stepNumber(7)
        Logger.verification("Verificar que se muestra mensaje de confirmacion y el producto se agrega a el carrito")
        ProductDetailsMethods.verifyProductAddedMesaage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);

        Logger.stepNumber(8)
        Logger.step('Hacer click en boton "cart" ubicado en el top menu')
        CommonPageMethods.clickOnCartOption();

        Logger.stepNumber(9)
        Logger.step('Verificar que se muestre la pagina del carrito de compras')
        CartMethods.verifyCardPageIsShown();

        Logger.stepNumber(10)
        Logger.step('Hacer click en el botón "Place Order"')
        CartMethods.ClickOnPlaceOrderButton();

        Logger.stepNumber(11)
        Logger.step('Completar la pagina de informacion con datos obligatorios en la pagina de envio ')
        PlaceOrdermethods.insertOrderInformation(PlaceOrderData.testData)

        Logger.stepNumber(12)
        Logger.step('Hacer click en el boton Purchase')
        PlaceOrdermethods.ClickOnPurchaseButton()

        Logger.stepNumber(13)
        Logger.step('Verificar que se muestra un mensaje de confirmacion y se redirige al usuario a la pagina de inicio')
        ThankYouForYouPurchaseMethods.verifyGrennCheckMarkisDisplayed();
        cy.wait(2000);
        ThankYouForYouPurchaseMethods.clickOnOkButton()
        cy.wait(2000);


        Logger.stepNumber(14);
        Logger.step('Verificar que se muestra la página de inicio');
        cy.wait(2000);
        Homemethods.verifyHomePageIsShown();

    })
})