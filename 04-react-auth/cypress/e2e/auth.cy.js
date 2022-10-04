/* eslint-disable no-undef */
describe('Mi Primer Test', () => {
  it('Lee Hola Mundo en Home /', () => {
    // 01. Setup del Estado de la Aplicación
    cy.visit('/')

    // 02. Ejecutar acciones
    cy.get('h1')
      .contains('Home') // 03. Espero un resultado
  })

  it('Login funcionando como Customer', () => {
    // 01. Setup del Estado de la Aplicación
    // Intercept: Lo uso cuando voy a llamar a una API
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')

    // 02. Ejecutar acciones
    cy.get('#floatingEmail').type('drstrange@marvel.com')
    cy.get('#floatingPassword').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi') // Espero a que se resuelva la llamada a la API
    // 03. Espero un resultado
    cy.get('h1').should('have.text', 'Dashboard')
  })

  it('Probar el Logout', () => {
    // 01. Setup del Estado de la Aplicación
    // Intercept: Lo uso cuando voy a llamar a una API
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')

    // 02. Ejecutar acciones
    cy.get('#floatingEmail').type('drstrange@marvel.com')
    cy.get('#floatingPassword').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi') // Espero a que se resuelva la llamada a la API
    cy.get('nav > ul li:last').click()

    // 03. Espero un resultado
    cy.get('h1').should('have.text', 'Home')
  })
})
