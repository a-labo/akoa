/**
 * Test case for exceptionMiddleware.
 * Runs with mocha.
 */
'use strict'

const exceptionMiddleware = require('../lib/middlewares/exception_middleware.js')
const assert = require('assert')
const co = require('co')

describe('exception-middleware', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Exception middleware', () => co(function * () {
    let middleware = exceptionMiddleware({})
    yield middleware({}, () =>
      new Promise((resolve, reject) => setTimeout(() => reject('failed!'), 200))
    )
  }))
})

/* global describe, before, after, it */
