Cypress
  .Commands
  .add('waitTimes', (alias, options, count) => {
    // decrease count till 0, which is falsy
    for (; count; count--) {
      cy
        .wait(alias, options)
    }
  })