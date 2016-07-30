/**
 * Async wrapper for koa server
 * @module akoa
 * @version 1.2.0
 */

'use strict'

const create = require('./create')
const AKoa = require('./akoa')

let lib = create.bind(this)

Object.assign(lib, create, {
  create,
  AKoa
})

module.exports = lib
