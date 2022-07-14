// <reference types="cypress" />

describe('TictacToe - Game', () => {
  before(() => {
     cy.visit(Cypress.env('local_development_url'));
  })

  it('displays an initial label stating it is player reds turn first', () => {
    cy.get("#root > div > h3").should('contain', "Red's turn")
  })

  it('updates the display label to player turn is yellow ', () => {
    cy.get('.css-1bzmbb9').first().click()
    cy.get("#root > div > h3").should('contain', "Yellow's turn")
  })

  it('allows the games state to be reset provided one turn has been played ', () => {
    cy.get('.css-1bzmbb9').first().click()
    cy.contains("Reset").click()
  })

  it('allows vertical win', () => {
    for (var i = 0; i < 4; i++) {
      cy.get('.css-1bzmbb9').eq(0).click()
      cy.get('.css-1bzmbb9').eq(8).click()
    }

    cy.get("#root > div > h3").should('contain', 'Red wins!')
    cy.contains("Reset").click()

  })

  it('allows horizontal win', () => {
    cy.get('.css-1bzmbb9').each(($el) => {
      cy.wrap($el).click()
    })

    cy.get("#root > div > h3").should('contain', 'Red wins!')
    cy.contains("Reset").click()
  })
})


