/**
 * 
 */

'use strict'

const d = (module) => module && module.default || module

const bodyMiddleware = d(require('./body_middleware'))
const exceptionMiddleware = d(require('./exception_middleware'))
const staticMiddleware = d(require('./static_middleware'))

module.exports = {
  bodyMiddleware,
  exceptionMiddleware,
  staticMiddleware
}
