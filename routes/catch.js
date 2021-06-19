const fastify = require('fastify')

const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    }
}

async function routes(fastify, opts) {
    fastify.get('/', (request, reply) => {
        reply.send({ hello: 'world' })
        
    })
}   

module.exports = routes