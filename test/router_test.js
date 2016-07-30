/**
 * Test case for router.
 * Runs with mocha.
 */
'use strict'

const Router = require('../lib/router.js')
const assert = require('assert')
const co = require('co')

describe('router', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Router', () => co(function * () {
    assert.ok(new Router())
  }))
})

/* global describe, before, after, it */
