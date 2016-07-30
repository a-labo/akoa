/**
 * Define an static middleware
 * @function staticMiddleware
 * @param {string|string[]} root - Root directory
 * @param {Object} options - Optional settings
 * @returns {function}
 */
'use strict'

const koaCompose = require('koa-compose')
const koaStatic = require('koa-static')

/** @lends staticMiddleware */
function staticMiddleware (root, options = {}) {
  return koaCompose(
    [].concat(root || []).map((root) => koaStatic(root, options))
  )
}

module.exports = staticMiddleware
