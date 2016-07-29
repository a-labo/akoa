#!/usr/bin/env node

/**
 * This is an example to run akoa server
 */
'use strict'

const akoa = require('akoa')
const co = require('co')

akoa([
  // Koa middleware
  co.wrap(function * middleware01 (ctx, next) {
    /* ... */
    yield next()
  })
]).listen(3000)
