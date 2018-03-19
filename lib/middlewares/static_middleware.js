/**
 * Define an static middleware
 * @function staticMiddleware
 * @param {string|string[]} root - Root directory
 * @param {Object} options - Optional settings
 * @returns {function}
 */
'use strict'

const compose = require('koa-compose')
const koaSend = require('koa-send')
const path = require('path')

/** @lends staticMiddleware */
function staticMiddleware (root, options = {}) {
  let {maxage, hidden, gzip, format, prefix} = options
  return compose(
    [].concat(root || []).map((root) => async function serve (ctx, next) {
      switch (ctx.method) {
        case 'HEAD':
        case 'GET': {
          const filename = '/' + path.relative(prefix || '/', ctx.path)
          const done = await koaSend(ctx, filename, {root, maxage, hidden, gzip, format})
          if (!done) {
            await next()
          }
          break
        }
        default:
          await next()
      }
    })
  )
}

module.exports = staticMiddleware
