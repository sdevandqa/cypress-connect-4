// <reference types="cypress" />
import TickTackToePage from '../support/PageObjects/TickTackToePage';

const tickTackToePage = new TickTackToePage();

describe('TictacToe - Game', () => {
  before(() => {
     cy.visit(Cypress.env('local_development_url'));
  })

  it('displays an initial label stating current players turn', () => {
    tickTackToePage.getPlayerTag().should('contain', "Red's turn")
  })

  it('updates the display label to player turn is yellow ', () => {
    tickTackToePage.getGridCircle().first().click()
    tickTackToePage.getPlayerTag().should('contain', "Yellow's turn")
  })

  it('allows the games state to be reset provided one turn has been played ', () => {
    tickTackToePage.getGridCircle().first().click()
    tickTackToePage.getResetButton().click()
  })

  it('allows vertical win', () => {
    // Example of using a command instead of accessing page object selectors.
    cy.setVerticalWinCondition()
    //cy.setVerticalWinConditionUsingPageObjects()

    tickTackToePage.getPlayerTag().should('contain', "Red wins!")
    tickTackToePage.getResetButton().click()
  })

  it('allows horizontal win', () => {
    tickTackToePage.getGridCircle().each(($el) => {
      cy.wrap($el).click()
    })

    tickTackToePage.getPlayerTag().should('contain', "Red wins!")
    tickTackToePage.getResetButton().click()
  })
}) 


