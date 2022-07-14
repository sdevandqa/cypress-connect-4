class TickTackToePage {
  getPlayerTag() {
      return cy.get("#root > div > h3");
  }

  getGridCircle(){
    return cy.get('.css-1bzmbb9');
  }

  getResetButton() {
    return cy.get('#root > div > button');
  }
}

export default TickTackToePage