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
  let { logger, status, prefix } = defaults(options, {
    logger: console.error,
    status: 500,
    prefix: null
  })
  return co.wrap(function * exceptionMiddleware (ctx, next) {
    let skip = prefix && (ctx.path.indexOf(prefix) !== 0)
    if (skip) {
      yield next()
      return
    }
    try {
      yield next()
    } catch (err) {
      logger('Uncaught exception:', err)
      ctx.status = status
    }
  })
}

module.exports = exceptionMiddleware
