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

    static SeleccionarCiudadOrigen(ciudad){
       /* cy.get('#react-select-4-input').click(); */
        cy.get('.css-1nmdiq5-menu').should('be.visible').contains(ciudad).click();
    }
    static SeleccionarCiudadDestino(ciudad){
         cy.get('.css-1nmdiq5-menu').should('be.visible').contains(ciudad).click();
     }

     static seleccionarAsientoDisponible() {
        cy.get('ul li').each(($li) => {
            cy.log('Revisando asiento:', $li); // Para verificar cada elemento <li> que está siendo iterado
    
            const $asiento = $li.find('.seat-sprite.icon-salon-cama-seat_available'); // Selector de asiento disponible
            
    
            if ($asiento.length > 0) { // Verificamos si el asiento está disponible
                cy.log('Asiento disponible encontrado, haciendo clic'); // Confirmar si se encuentra el asiento disponible
                cy.wrap($li).click(); // Le damos clic al asiento disponible
                
                // Espera para asegurarse de que el DOM se actualice
                cy.wait(10000); // Ajusta el tiempo según sea necesario
                
                // Verificar que el asiento se haya seleccionado correctamente
                //cy.get('.seat-sprite.icon-salon-cama-seat_available').should('exist');
    
                // Verificar que el botón "Continuar:" esté visible y habilitado
                cy.contains('div', 'Continuar:', { timeout: 20000 })
                  .should('be.visible')
                  .and('not.be.disabled');
    
                return false; // Terminamos el ciclo una vez encontrado el asiento disponible
            } else {
                cy.log('No hay asiento disponible en este <li>'); // Indicar que no estaba disponible
            }
        });
    }
    

//***********************************Antiguin funcionando**************************************************************** */
   /*   static seleccionarAsientoDisponible() {
        cy.get('ul li').each(($li) => {
            cy.log('Revisando asiento:', $li); // Para verificar cada elemento <li> que está siendo iterado
    
            // Cambiar el selector aquí
            const $asiento = $li.find('.icon-salon-cama-seat_available'); // Actualizar el selector a 'icon-salon-cama-seat_available'
            
            if ($asiento.length > 0) { // Verificamos si el asiento está disponible
                cy.log('Asiento disponible encontrado, haciendo clic'); // Confirmar si se encuentra el asiento disponible
                cy.wrap($li).click(); // Le damos clic al asiento disponible
                return false; // Terminamos el ciclo una vez encontrado el asiento disponible
            } else {
                cy.log('No hay asiento disponible en este <li>'); // Para indicar que el asiento no estaba disponible
            }
        });
    } */
   //*************************************************************************************************************** */
    
    static ingresarDatosPasajero(rut) {
        cy.get('.kupos-input_common_kupos_input__GoBgX').first().click().type(rut);
        cy.get('.payment-checkbox').click();
        cy.get('.pay-now-section > .pay-now-button').click();
        cy.get('.name-input').eq(1).find('input').click();
        cy.get('.accept-tnc-1 > .kupos-checkbox_common_kupos_checkbox__bI9l6 > label > .kupos-checkbox_kupos_checkbox__mwn0P > .kupos-checkbox_icon_check_square_pink_line__C8Rou').click();
        cy.wait(5000);
        cy.get('.pay-now-section .pay-now-button').click();
        cy.wait(10000);
    }

    static procesarPagoDebito(numeroTarjeta, rutCliente, passwordCliente, pin) {
        cy.get('body').click();  // Clic en cualquier parte de la pantalla
        cy.get('#debito').click();
        cy.get('button.combobox-button').should('be.visible').and('not.be.disabled').click();
        cy.get('li > button').click();
        cy.get('#pan').type(numeroTarjeta);
        cy.get('button.submit').should('be.visible').and('not.be.disabled').click();
        cy.wait(20000);

        cy.get('input[name="rutClient"]').type(rutCliente);
        cy.get('input[name="passwordClient"]').type(passwordCliente);
        cy.get('input[type="submit"][value="Aceptar"]').click();
        cy.get('input[type="submit"][value="Continuar"]').click();
        cy.wait(30000);

        cy.get('input[placeholder="Enter Pin"]').type(pin);
        cy.wait(20000);
    }

    static procesarPagoCredito(numeroTarjeta, fechaExpiracion, cvv, rutCliente, passwordCliente, pin) {
        // Seleccionar la opción de crédito
        cy.get('#credito').click();
        
        // Ingresar el número de tarjeta
        cy.get('#card-number').type(numeroTarjeta);
        
        // Ingresar la fecha de expiración
        cy.get('input[name="fechaExpiracion"]').type(fechaExpiracion);
        
        // Ingresar el CVV
        cy.get('input[formcontrolname="cvv"]').type(cvv);
        
        // Hacer clic en el botón "Siguiente"
        cy.get('.submit').click();
        cy.wait(20000); // Espera de 2 segundos
        
        // Hacer clic nuevamente en el botón "Siguiente"
        //cy.get('.next').click();
        
        // Ingresar el RUT del cliente
        cy.get('#rutClient').type(rutCliente);
        //cy.get('input[name="rutClient"]').type(rutCliente);
        
        // Ingresar la contraseña del cliente
        cy.get('#passwordClient').type(passwordCliente);

        //cy.get('input[name="passwordClient"]').type(passwordCliente);
        
        // Hacer clic en el botón "Aceptar"
        cy.get('input[type="submit"][value="Aceptar"]').click();
        
        // Hacer clic en el botón "Continuar"
        cy.get('input[type="submit"][value="Continuar"]').click();
        cy.wait(90000); // Espera de 20 segundos para la transacción
        
        // Ingresar el PIN
        cy.get('input[placeholder="Enter Pin"]').type(pin);
    }
    
    
    // cypress/support/commands.js



    

   

}
