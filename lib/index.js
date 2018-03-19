/**
 * Async wrapper for koa server
 * @module akoa
 * @version 2.0.2
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
