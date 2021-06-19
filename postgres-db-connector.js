const fastifyPlugin = require('fastify-plugin')

async function dbConnector (fastify, options) {
    fastify.register(require('fastify-postgres'), {
        connectionString: 'postgres://postgres@localhost/postgres'
    })
}

module.exports = fastifyPlugin(dbConnector)