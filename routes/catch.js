const fastify = require('fastify')


async function routes(fastify, options) {
    fastify.get('/catch', async (request, reply) => {
        return{ hello: 'world' }
        
    })
}   

module.exports = routes