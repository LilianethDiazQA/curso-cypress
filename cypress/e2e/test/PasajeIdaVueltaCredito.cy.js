import { CommonPageMethods } from "../pages/Common-page/common-page.methods";

describe('Ida y Vuelta', () => {
    it('Ofertar viaje de Ida y vuelta -Test 4', () => {
        cy.viewport(1280, 720);
        CommonPageMethods.navigateToKupos()

        // Abre la lista de opciones

        cy.get('#react-select-4-input').click();
        cy.wait(2000);
        CommonPageMethods.SeleccionarCiudadOrigen('Santiago, Chile');
        CommonPageMethods.SeleccionarCiudadDestino('Valparaiso, Chile');
        cy.performSearch(); // Llama al comando que creaste en command.js (Seleccion de fechas)
        cy.log('Seleccion de fechas') 
        cy.wait(10000);

        cy.get('.kupos-button_kupos_button__h6fCb.kupos-button').eq(9).should('be.visible').contains('Comprar').click();
        cy.wait(20000);

       cy.get('ul li').each(($li) => {
            cy.log('Revisando asiento:', $li); // Para verificar cada elemento <li> que está siendo iterado

            const $asiento = $li.find('.index_seat_number__fiTY_');//'.icon-executive-seat_available'); // Actualizar el selector a 'index_seat_number__fiTY_'

            if ($asiento.length > 0) { // Verificamos si el asiento está disponible
                cy.log('Asiento disponible encontrado, haciendo clic'); // Confirmar si se encuentra el asiento disponible
                cy.wrap($li).click({ force: true }); // Le damos clic al asiento disponible
                return false; // Terminamos el ciclo una vez encontrado el asiento disponible
            } else {
                cy.log('No hay asiento disponible en este <li>'); // Para indicar que el asiento no estaba disponible
            }
        }) 
 
        cy.contains('div', 'Continuar:').should('be.visible').click();
        cy.wait(20000);

        //Hace clic al modal de seleccion pasaje de vuelta
        cy.get('.bip-info-modal-container') // Asegúrate de que el modal esté visible
            .should('be.visible'); // Verifica que el modal se esté mostrando
        /*   cy.get('.bip-popup-button-container-edit .bip-edit-button') // Hace clic en el botón */
        cy.get('.edit-bip-button > .kupos-button_kupos_button__h6fCb').click();

        cy.get('.kupos-button_kupos_button__h6fCb.kupos-button').eq(105).should('be.visible').contains('Comprar').click();
        cy.wait(20000);

        // Cypress code to select the first available seat
        cy.get('.seat-sprite.icon-executive-seat_available')  // Selector for available seats
            .first()  // Select the first available seat
            .click({ force: true });

        cy.contains('div', 'Continuar:').should('be.visible').click();
        cy.wait(20000);

        cy.get('.kupos-input_common_kupos_input__GoBgX').first().click().type('27982694-9');
        cy.get('.passenger-inputs-block > :nth-child(2) > .kupos-checkbox_common_kupos_checkbox__bI9l6 > label > .kupos-checkbox_kupos_checkbox__mwn0P > .kupos-checkbox_icon_check_square_pink_line__C8Rou').click();
        cy.get('.kupos-input_input_outer__6glbm input.font10').eq(4).type('Lilianeth');
        cy.get('.kupos-input_input_outer__6glbm input.font10').eq(5).type('Diaz');

        cy.get('.payment-checkbox').click();
        cy.get('.pay-now-section > .pay-now-button').click();
        cy.get('.name-input').eq(1).find('input').click();
        cy.get('.accept-tnc-1 > .kupos-checkbox_common_kupos_checkbox__bI9l6 > label > .kupos-checkbox_kupos_checkbox__mwn0P > .kupos-checkbox_icon_check_square_pink_line__C8Rou').click();
        cy.wait(5000);

        cy.get('.pay-now-section > .pay-now-button').click();
        cy.wait(30000); 
        CommonPageMethods.procesarPagoCredito('4051885600446623', '1225', '123', '11111111-1', '123', '123');
        cy.wait(20000)
        cy.get('.success-failure_cancel_ticket_done__FINCn').should('contain.text', '¡Listo!');



    })

})