describe('Commands', () => {
  it('innerText', function () {

    cy
      .visit('cypress/html/inner_text.html')

    cy
      // language=CSS
      .get('span[class="fullName"]')
      .should('have.text', 'Homer J. Simpson')
      .innerText()
      .should('eq', 'Homer Simpson')

  })
})