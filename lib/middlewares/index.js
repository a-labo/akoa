/**
 * 
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get exceptionMiddleware () { return d(require('./exception_middleware')) }
}
