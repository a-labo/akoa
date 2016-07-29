/**
 * @class AKoa
 * @param {function[]} - Middlewares to use
 */
'use strict'

const http = require('http')
const Koa = require('koa')
const koaCompose = require('koa-compose')

/** @lends AKoa */
class AKoa {
  constructor (middlewares, options = {}) {
    const s = this
    s.app = AKoa.newApp(middlewares)
  }

  /**
   * Use a middleware
   * @param {function} middleware
   */
  use (middleware) {
    const s = this
    return s.app.use(...arguments)
  }

  /**
   * Listen to port
   * @param {number} port
   * @returns {Promise.<AKoa>}
   */
  listen (port) {
    const s = this
    let server = http.createServer()
    s.attachTo(server)
    return new Promise((resolve) =>
      server.listen(port, () => resolve())
    ).then(() => s)
  }

  /**
   * Close server
   * @returns {Promise.<AKoa>}
   */
  close () {
    const s = this
    let { server } = s
    if (!server) {
      return Promise.reject(new Error('Nothing to close!'))
    }
    return new Promise((resolve) =>
      server.close(() => {
        delete s.server
        resolve()
      })
    ).then(() => s)
  }

  /**
   * Attach rfunc to http server
   * @param {http.Server} server - A server instance
   * @returns {Promise.<AKoa>}
   */
  attachTo (server) {
    const s = this
    let { app } = s
    s.server = server
    server.addListener('request', app.callback())
    return Promise.resolve(s)
  }

  /**
   * Convert to koa middleware.
   * This is useful when you already han another koa instance.
   * @returns {function}
   */
  toMiddleware () {
    const s = this
    let { app } = s
    return koaCompose(app.middleware)
  }

  /**
   * Convert to http handler
   * @returns {function}
   */
  toCallback () {
    const s = this
    let { app } = s
    return app.callback()
  }

  static newApp (middlewares, options = {}) {
    let app = new Koa()
    for (let middleware of [].concat(middlewares || [])) {
      app.use(middleware)
    }
    return app
  }

}

Object.assign(AKoa, {})

module.exports = AKoa

