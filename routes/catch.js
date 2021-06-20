const catchPokemon = require('../schemas')

async function routes(fastify, options) {
    fastify.post('/catch', {schema: catchPokemon}, async (request, reply) => {
        const {pokemonName} = request.body
        
    })
}   

module.exports = routes