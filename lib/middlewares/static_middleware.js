/**
 * Define an static middleware
 * @function staticMiddleware
 * @param {string|string[]} root - Root directory
 * @param {Object} options - Optional settings
 * @returns {function}
 */
'use strict'

const koaCompose = require('koa-compose')
const koaSend = require('koa-send')
const co = require('co')
const path = require('path')

/** @lends staticMiddleware */
function staticMiddleware (root, options = {}) {
  let { maxage, hidden, gzip, format, prefix } = options
  return koaCompose(
    [].concat(root || []).map((root) => co.wrap(function * serve (ctx, next) {
      switch (ctx.method) {
        case 'HEAD':
        case 'GET': {
          let filename = path.relative(prefix || '/', ctx.path)
          let done = yield koaSend(ctx, ctx.path, { maxage, hidden, gzip, format })
          if (!done) {
            yield next()
          }
          break
        }
        default:
          yield next()
      }
    }))
  )
}

module.exports = staticMiddleware
