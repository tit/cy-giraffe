describe('Commands', () => {
  it('log', function () {

    cy
      .visit('cypress/html/log.html')

    cy
      .log('open file', {fileName: 'main.json'})

  })
})