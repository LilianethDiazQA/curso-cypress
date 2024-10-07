import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
    static navigateToKupos() {
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(CommonPageData.url);
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.get('div.index_pip_popup_main_container___KjAB div').eq(0).click();
          cy.get('input[placeholder="Enter Pin"]').type('7600');
          cy.wait(1000);
        
        /* CommonPageMethods.clickOnHomeOption(); */
    }

    static clickOnPreparaTuViaje() {
        CommonPageElements.TopMenu.PreparaTuViaje.click();
    }

    static ClickOnAhorra() {
        CommonPageElements.TopMenu.ahorra.click();
    }
    static clickOnclubMuvify() {
        CommonPageElements.TopMenu.clubMuvify.click();
    }
    static clickOnserviciosAdicionales() {
        CommonPageElements.TopMenu.serviciosAdicionales.click();

    }
    static clickOnayuda() {
        CommonPageElements.TopMenu.ayuda.click();
        /*  Cypress.on('uncaught:exception', (err, runnable) => {
             return false
         }) */
    }
    static clickOnLoginOption() {
        CommonPageElements.TopMenu.Login.click({ force: true, multiple: true });
    }

    static clickOnSignUpOption() {
        CommonPageElements.TopMenu.SignUp.click();
    }

    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage);
        });
    }
    static generateRandomString(length = 10) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    static verifySignedUser(username) {
        CommonPageElements.signedUser.should("have.text", `Welcome ${username}`);
    }

    static logout() {
        cy.get('body').then($body => {
            if ($body.find('#logout2[style="display: block;"]').length > 0) {
                CommonPageElements.TopMenu.logout.click();
            }
        })
    }
/* 
    static SeleccionarCiudadOrigen(ciudad){
       cy.get('#react-select-4-input').click();
        cy.get('.css-1nmdiq5-menu').should('be.visible').contains(ciudad).click();
    }
    static SeleccionarCiudadDestino(ciudad){
         cy.get('.css-1nmdiq5-menu').should('be.visible').contains(ciudad).click();
     }

     */
}
