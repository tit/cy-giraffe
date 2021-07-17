Cypress
  .Commands
  .add(
    'hide',
    {
      prevSubject: true,
    }, ($subject) => {
      $subject
        .attr('style', 'visibility: hidden !important')

      return $subject
    })