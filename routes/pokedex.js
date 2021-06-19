const fastify = require('fastify')
const dbconnector = require('./postgres-db-connector')

async function routes(fastify, options) {
    const client = fastify.db.client
    fastify.get('/pokedex/', {schema: allPokemon}, async function (request, reply) {
        try {
            const {rows} = await client.query('SELECT * FROM pokemon')
            console.log(rows)
            reply.send(rows)
        } catch(err) {
            throw new Error(err)
        }
    })
        
}   

module.exports = routes
