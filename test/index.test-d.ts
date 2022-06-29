import fastify from 'fastify'
import fastifyReqID from '..'

const app = fastify()

app.register(fastifyReqID)

app.register(fastifyReqID, {
  generateHash: () => '',
  findRequestHeader: undefined,
  addResponseHeader: undefined
})

app.register(fastifyReqID, {
  findRequestHeader: 'x-request-id-v2',
  addResponseHeader: 'x-resp-id-v2'
})
