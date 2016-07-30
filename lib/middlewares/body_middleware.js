/**
 * @function bodyMiddleware
 */
'use strict'

const koaBodyparser = require('koa-bodyparser')

/** @lends bodyMiddleware */
function bodyMiddleware () {
  return koaBodyparser()
}

module.exports = bodyMiddleware
