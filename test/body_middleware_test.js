/**
 * Test case for bodyMiddleware.
 * Runs with mocha.
 */
'use strict'

const bodyMiddleware = require('../lib/middlewares/body_middleware.js')
const assert = require('assert')
const co = require('co')

describe('body-middleware', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Body middleware', () => co(function * () {
    let middleware = bodyMiddleware({})
    assert.ok(middleware)
  }))
})

/* global describe, before, after, it */
