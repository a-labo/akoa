/**
 * Define an exception middleware
 * @function exceptionMiddleware
 * @param {Object} [options] - Optional settings
 * @returns {function}
 */
'use strict'

const co = require('co')
const defaults = require('defaults')

/** @lends exceptionMiddleware */
function exceptionMiddleware (options = {}) {
  let {logger, status} = defaults(options, {
    logger: console.error,
    status: 500
  })
  return co.wrap(function * exceptionMiddleware (ctx, next) {
    try {
      yield next()
    } catch (err) {
      logger('Uncaught exception:', err)
      ctx.status = status
    }
  })
}

module.exports = exceptionMiddleware
