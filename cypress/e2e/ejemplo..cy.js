// cypress/e2e/example.spec.js

import { LoginMethods } from "./pages/login/login.methods"

describe('Visitar sitio web y verificar contenido', () => {
    it('Visita el sitio web y verifica el contenido', () => {
      // Visita el sitio web
      const usuario ='random01';
      const contrasena = 'random01'
      cy.visit('https://www.demoblaze.com/')
      cy.get('a[data-target="#logInModal"]').click()
      LoginMethods.login(usuario,contrasena)
      cy.wait(5000)
      cy.get('a#nameofuser').should('contain.text',usuario)
  
      // Verifica que el título de la página contenga 'Example Domain'
      //cy.contains('Example Domain').should('exist')
    })
  })
  