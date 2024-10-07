import { CommonPageData } from "./pages/Common-page/common-page.data";
import { CommonPageMethods } from "./pages/Common-page/common-page.methods";
import { Logger } from "./util/logger";

xdescribe('kupos', () => {
  it('Navegar a Kupos', () => {
    Logger.stepNumber(1)
    /* Logger.step('Navegar a la pagina de inicio') */
    CommonPageMethods.navigateToKupos();
  });

  it ('Navegar por la NavBar',()=>{
  CommonPageMethods.navigateToKupos();
  CommonPageMethods.clickOnPreparaTuViaje();
  CommonPageMethods.ClickOnAhorra();
  CommonPageMethods.clickOnserviciosAdicionales();
  CommonPageMethods.clickOnclubMuvify();
  CommonPageMethods.clickOnayuda();
  CommonPageMethods.clickOnLoginOption();
  cy.wait(1000);
  cy.get('g#Close-Window path.svg-home_close_cls_1__a1KVs').click({ force: true, multiple: true });
  cy.wait(1000);
})

 it ('Login',()=>{
  CommonPageMethods.navigateToKupos();
  CommonPageMethods.clickOnLoginOption();
  cy.contains('span', 'Iniciar sesión con Google').click({ force: true, multiple: true });
  cy.wait(1000);
 })


})

   
    


