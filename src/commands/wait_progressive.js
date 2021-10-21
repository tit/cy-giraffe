Cypress
  .Commands
  .add('waitProgressive', (multiplier) => {
    const currentRetry = Cypress._.get(cy.state('runnable'), '_currentRetry', 0)

    cy
      .wait(currentRetry * multiplier)
  })