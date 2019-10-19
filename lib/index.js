/**
 * Async wrapper for koa server
 * @module akoa
 * @version 3.0.0
 */

'use strict'

const create = require('./create')
const AKoa = require('./akoa')
const Router = require('./router')

let lib = create.bind(this)

Object.assign(lib, create, AKoa, {
  create,
  AKoa,
  Router
})

module.exports = lib
