/**
 * 
 */

'use strict'

const _d = (module) => module && module.default || module

const bodyMiddleware = _d(require('./body_middleware'))
const exceptionMiddleware = _d(require('./exception_middleware'))
const staticMiddleware = _d(require('./static_middleware'))

module.exports = {
  bodyMiddleware,
  exceptionMiddleware,
  staticMiddleware
}
