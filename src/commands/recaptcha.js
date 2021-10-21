require('cypress-iframe')

Cypress
  .Commands
  .add('reCaptcha', () => {
    cy
      // language=CSS
      .iframe('iframe[title="reCAPTCHA"]')
      // language=CSS
      .find('span[role="checkbox"]')
      .click()

    cy
      // language=CSS
      .iframe('iframe[title="reCAPTCHA"]')
      // language=CSS
      .contains('div[id="recaptcha-accessible-status"]', 'You are verified')
  })
