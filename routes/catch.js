const catchPokemon = require('../schemas')
const { successRoll } = require('../helpers/successroll')
const { validPokemon } = require('../services/validpokemon')
const { catchService } = require('../services/catch')

async function routes(fastify, options) {
    fastify.post('/catch', {schema: catchPokemon}, async (request, reply) => {
        const pokemonName = request.body
        if(validPokemon(pokemonName) === false)
        {
           throw new Error('Pokemon does not exist')
        }
        else{
            if(successRoll === false)
            {
                throw new Error('Catch attempt unsuccessful')
            }
            else{
                reply.send(catchService(pokemonName))
            }
        }
        })

}   

module.exports = routes