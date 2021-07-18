describe('Commands', () => {
  it('hide', function () {

    cy
      .visit('cypress/html/hide.html')

    cy
      // language=CSS
      .get('div[class="dynamic"]')
      .should('be.visible')
      .hide()
      .should('not.be.visible')

  })
})