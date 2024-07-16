// cypress/e2e/example.spec.js

describe('Visitar sitio web y verificar contenido', () => {
    it('Visita el sitio web y verifica el contenido', () => {
      // Visita el sitio web
      cy.visit('https://www.google.com/')
  
      // Verifica que el título de la página contenga 'Example Domain'
      //cy.contains('Example Domain').should('exist')
    })
  })
  