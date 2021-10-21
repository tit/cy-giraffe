Cypress
  .Commands
  .add(
    'slotContent',
    {
      prevSubject: true,
    }, ($subject, nodeIndex = 0) => {
      return $subject
        .get(0)
        .assignedNodes()[nodeIndex]
    },
  )