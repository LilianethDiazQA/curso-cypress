// cypress/support/commands.js

Cypress.Commands.add('performSearch', () => {
    cy.get('input.bold-text').click(); // Click en el input con clase bold-text
    cy.get('div.undefined span').click(); // Click en el span dentro de un div con clase undefined
    cy.wait(2000); // Espera 2 segundos

    cy.get(':nth-child(5) > .kupos-date-picker_common_kupos_date_picker__RECcj > .date-inner > input').click(); // Click en el input del date picker
    cy.get('span.kupos-calendar_day_number_inner__wriTK').contains('30').click(); // Click en el span que contiene ''
     
    cy.get('.kupos-button.home-selection-input-button')
    .should('be.visible')
    .click({ force: true });
    cy.wait(5000);


    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignora todas las excepciones no capturadas
        return false;
        
    });
   

}); 

