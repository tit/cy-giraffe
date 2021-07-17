const DeepRenameKeys = require('deep-rename-keys')

// region log

/**
 * @see https://github.com/cypress-io/cypress/discussions/16690
 */
Cypress
  .Commands
  .overwrite('log', (originalFunction, message, data = {}) => {

    const newData = DeepRenameKeys(data, (key) => {
      return Cypress
        ._
        .snakeCase(key)
    })

    return originalFunction(message, newData)
  })

// endregion
