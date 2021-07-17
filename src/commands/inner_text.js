Cypress
  .Commands
  .add('innerText', {
    prevSubject: true
  }, ($subject) => {
    return $subject
      .get(0)
      .innerText
  })