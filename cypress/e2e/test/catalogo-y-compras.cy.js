import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { Homemethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { Logger } from "../util/logger";

const user = LoginData.validcredentials;
const product= "ASUS Full HD";

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

    it ('Agregar productos al carrito', ()=>{

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
        
        Logger.stepNumber(4)
        Logger.step ('Hacer click en un producto especifico')
        Homemethods.clickOnProductLink(product)
        
        Logger.stepNumber(5)
        Logger.verification("Verificar que se muestra la pagina de detalles del producto")
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step ('Hacer click en boton Add to cart')
        ProductDetailsMethods.clicOnAddtocartButton();

        Logger.stepNumber(7)
        Logger.verification("Verificar que se muestra mensaje de confirmacion y el producto se agrega a el carrito")
        ProductDetailsMethods.verifyProductAddedMesaage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);
        
    })
})