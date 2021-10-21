Cypress
  .Commands
  .add('suppressError', () => {
    cy
      .on('uncaught:exception', () => {
        return false
      })
  })
