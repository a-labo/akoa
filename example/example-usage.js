#!/usr/bin/env node

/**
 * This is an example to run akoa server
 */
'use strict'

const akoa = require('akoa')
const co = require('co')

co(function * () {
  let server = yield akoa([
    // Koa middleware
    co.wrap(function * middleware01 (ctx, next) {
      /* ... */
      yield next()
    })
  ]).listen(3000)

  /* ... */

  yield server.close()

}).catch((err) => console.error(err))
