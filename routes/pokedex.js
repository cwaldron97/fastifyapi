const fastify = require('fastify')
const pg = require('fastify-postgres')


async function routes(fastify, options) {
    fastify.get('/pokedex/:id', async (request, reply) => {
        fastify.pg.connect(onConnect)

        function onConnect(err, client, release) {
            if (err) return reply.send(err)

            client.query(
                'SELECT ID, pokemonname, FROM pokemon WHERE id=$1', [req.params.id],
                function onResult (err, result) {
                    release()
                    reply.send(err || result)
                }
            )
        }
    })
}   

module.exports = routes
