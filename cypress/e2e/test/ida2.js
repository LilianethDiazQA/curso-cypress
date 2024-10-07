import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
it('Ofertar viaje de Ida', () => {
    CommonPageMethods.navigateToKupos()
    /*  cy.get('#react-select-4-input').click().type('Santiago').type('{enter}');  esta forma es escribiendo la palabra y enter */
    /*  cy.wait(10000); */


    // Abre la lista de opciones
    cy.get('#react-select-4-input').click();

    // Espera a que el menú sea visible antes de buscar opciones esta forma es dandole click se hizo de esta manera porque es un elemento dinamico 
    cy.get('.css-1nmdiq5-menu', { timeout: 10000 }).should('be.visible').as('menu');
    cy.get('@menu').find('div').contains('Santiago, Chile').click();
    /* cy.wait(5000); */


    cy.get('.css-1nmdiq5-menu', { timeout: 10000 }).should('be.visible').as('menu');
    cy.get('@menu').find('div').contains('Viña Del Mar, Chile').click();
    /* cy.wait(5000); */

    cy.get('input.bold-text').click();
    cy.get('div.undefined span').click();
    /* cy.contains('span', '17').click(); */
    cy.contains('span', 'Buscar').click();

    /* cy.wait(20000); */

    cy.get('.kupos-button_kupos_button__h6fCb.kupos-button').eq(1).should('be.visible').contains('Comprar').click();

    /*  cy.get('.kupos-button_kupos_button__h6fCb.kupos-button').eq(1).contains('Comprar').click(); */ //esto estaba antes con un cy wait lo cambie para eliminar las pausas 
    cy.wait(10000);


    function seleccionarAsientoDisponible() {
        cy.get('ul li').each(($li) => { /* cy.get('ul li') >>Selecciona todos los elementos <li> dentro del <ul>. .each(($li) => { >>>/*  Itera sobre cada elemento <li>. */
            const $asiento = $li.find('.icon-executive-seat_available') /* Busca dentro del <li> si existe un elemento con las clases que indican que el asiento está disponible (.seat-sprite.icon-salon-cama-seat_available). */
            /* div.seat-mousover.mouseover-popups.font9.nowrap */
            '.seat-sprite.icon-salon-cama-seat_available'
            if ($asiento.length > 0) { // Verificamos si el asiento está disponible
                cy.wrap($li).click(); // Le damos clic al asiento disponible
                return false; // Terminamos el ciclo una vez encontrado el asiento disponible
            }
        });
    }

    seleccionarAsientoDisponible();
    /* cy.wait(20000); */
    cy.contains('div', 'Continuar:').should('be.visible').click();
    /* cy.wait(20000); */
    cy.get('.kupos-input_common_kupos_input__GoBgX').first().click().type('27982694-9');
    /* cy.wait(2000); */
    cy.get('.payment-checkbox').click()
    cy.get('.pay-now-section > .pay-now-button').click()
    cy.get('.name-input').eq(1).find('input').click();

    /* cy.wait(20000); */
    cy.get('.accept-tnc-1 > .kupos-checkbox_common_kupos_checkbox__bI9l6 > label > .kupos-checkbox_kupos_checkbox__mwn0P > .kupos-checkbox_icon_check_square_pink_line__C8Rou').click()
    cy.wait(5000);
    cy.get('.pay-now-section .pay-now-button').click();
    cy.wait(20000);
    
    cy.get('body').click()  // Clic en cualquier parte de la pantalla
    cy.get('#debito').click()
    cy.get('button.combobox-button').should('be.visible').and('not.be.disabled').click();
    cy.get('li > button').click();
    cy.get('#pan').type('4051885600446623');
    cy.get('button.submit').should('be.visible').and('not.be.disabled').click();
    cy.wait(20000);

    cy.get('input[name="rutClient"]').type('11111111-1');
    cy.get('input[name="passwordClient"]').type('123');
    cy.get('input[type="submit"][value="Aceptar"]').click();
    cy.get('input[type="submit"][value="Continuar"]').click();
    cy.wait(20000);
    cy.get('input[placeholder="Enter Pin"]').type('7600');
    cy.wait(20000);





    /* cy.get('.combobox-button.combobox-button--open').click() */
    /*          cy.contains('button', 'TEST COMMERCE BANK').click() */


    /* }) */

    /*  cy.intercept('POST', '/transbank-endpoint', { fixture: 'mockedResponse.json' }).as('transbankRequest');
     cy.get('#debito').click();
     cy.wait('@transbankRequest').its('response.statusCode').should('eq', 200); */







})

