/**
 * 
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get bodyMiddleware () { return d(require('./body_middleware')) },
  get exceptionMiddleware () { return d(require('./exception_middleware')) }
}
