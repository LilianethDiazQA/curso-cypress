import { CommonPageMethods } from "../pages/Common-page/common-page.methods";

describe('Ida', () => {
    
    it('Ofertar viaje de Ida -Test 2', () => {
        CommonPageMethods.navigateToKupos()
        /*  cy.get('#react-select-4-input').click().type('Santiago').type('{enter}');  esta forma es escribiendo la palabra y enter */
        /*  cy.wait(10000); */

        // Abre la lista de opciones
        cy.get('#react-select-4-input').click();
        cy.wait(2000); 
        CommonPageMethods.SeleccionarCiudadOrigen('Santiago, Chile');  
        CommonPageMethods.SeleccionarCiudadDestino('Villarrica, Chile');
        
     
        cy.get('input.bold-text').click();
        /* cy.get('div.undefined span').click(); */
         cy.contains('span', '17').click(); 
        cy.contains('span', 'Buscar').click();
        cy.wait(2000); 
        cy.get('.kupos-button_kupos_button__h6fCb.kupos-button').eq(8).should('be.visible').contains('Comprar').click();
        cy.wait(2000);

       CommonPageMethods.seleccionarAsientoDisponible();
        

        cy.contains('div', 'Continuar:').should('be.visible').click();
        cy.wait(2000);

        CommonPageMethods.ingresarDatosPasajero('27982694-9');

        CommonPageMethods.procesarPagoCredito('4051885600446623', '11111111-1', '123', '7600');
        cy.get('.success-failure_cancel_ticket_done__FINCn').should('contain.text', '¡Listo!');

       

    })


})