/**
 * Test case for akoa.
 * Runs with mocha.
 */
'use strict'

const AKoa = require('../lib/AKoa.js')
const aport = require('aport')
const assert = require('assert')
const co = require('co')

describe('akoa', function () {
  this.timeout(3000)
  let port, server

  before(() => co(function * () {
    port = yield aport()
    server = yield new AKoa([]).listen(port)
  }))

  after(() => co(function * () {
    yield server.close()
  }))

  it('Akoa', () => co(function * () {
    assert.ok(server)
  }))
})

/* global describe, before, after, it */
