Cypress
  .Commands
  .add('pseudo', {
    prevSubject: true,
  }, ($subject, elementType) => {
    const window = $subject[0].ownerDocument.defaultView
    return window.getComputedStyle($subject[0], elementType)
  })
