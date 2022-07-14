import TickTackToePage from '../support/PageObjects/TickTackToePage';

const tickTackToePage = new TickTackToePage();

Cypress.Commands.add('setVerticalWinConditionUsingPageObjects', () => {
   for (var i = 0; i < 4; i++) {
     tickTackToePage.getGridCircle().eq(0).click()
     tickTackToePage.getGridCircle().eq(8).click()
    }
})

Cypress.Commands.add('setVerticalWinCondition', () => {
   for (var i = 0; i < 4; i++) {
     cy.get('.css-1bzmbb9').eq(0).click()
     cy.get('.css-1bzmbb9').eq(8).click()
    }
})