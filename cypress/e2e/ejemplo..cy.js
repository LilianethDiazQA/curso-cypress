// cypress/e2e/example.spec.js
/* 
import { CartElements } from "./pages/cart/cart.elements"
import { CartMethods } from "./pages/cart/cart.methods"
import { HomeElements } from "./pages/home/home.elements"
import { Homemethods } from "./pages/home/home.methods" */
import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

describe('Visitar sitio web y verificar contenido', () => {
    it('Visita el sitio web y verifica el contenido', () => {
      const usuario ='random01';
      const contrasena = 'random01'

      Logger.stepNumber(1)
      Logger.step("Navigate to Demoblaze page")
      cy.visit('https://www.demoblaze.com/index.html')

      Logger.stepNumber(2)
      Logger.step("Clic on Login link")
      cy.get('a[data-target="#logInModal"]').click()

      Logger.stepNumber(3)
      Logger.step(`Login with this credentials:"${usuario}/${contrasena}"`)
      LoginMethods.login(usuario,contrasena)
      Logger.verification(`The home Should Show "Welcome ${usuario}"text`)

      cy.get('a#nameofuser').should('contain.text',usuario)
  
      // Verifica que el título de la página contenga 'Example Domain'
      //cy.contains('Example Domain').should('exist')
    })
  })
  