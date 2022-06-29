'use strict'

const fp = require('fastify-plugin')
const { customAlphabet } = require('nanoid')

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const defaultOptions = {
  generateHash: customAlphabet(alphabet, 15),
  findRequestHeader: 'x-request-id',
  addResponseHeader: 'x-request-id'
}

function fastifyReqID (fastify, opts, done) {
  fastify.decorateRequest('reqID', '')

  const options = Object.assign({}, defaultOptions, opts)

  fastify.addHook('onRequest', (request, reply, next) => {
    request.reqID = request.headers[options.findRequestHeader] || options.generateHash()
    next()
  })

  if (options.addResponseHeader) {
    fastify.addHook('onSend', (request, reply, payload, next) => {
      reply.header(options.addResponseHeader, request.reqID)
      next()
    })
  }

  done()
}

module.exports = fp(fastifyReqID, {
  fastify: '4.x',
  name: 'fastify-reqid'
})
