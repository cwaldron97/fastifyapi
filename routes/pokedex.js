const allPokemon = require('../schemas')


async function routes(fastify, options) {

    const client = fastify.db.client
    fastify.get('/pokedex', {schema: allPokemon}, async function (request, reply) {
        try {
            //rows is an object array containing the rows and the information in each row
            const {rows} = await client.query('SELECT * FROM "pokemon"')
            //gives us the most recently used id number which can both be used to increment id as well as track the number of pokemon caught
            const numberofpokemoncaught = rows[rows.length-1].id
            
            //forms a new json with the numberofpokemoncaught to make the defined schema
            const newInfo = {
                rows,
                totalnumberofpokemoncaught: numberofpokemoncaught
            }
            
            reply.send(newInfo)
        } catch(err) {
            throw new Error(err)
        }
    })
        
}   

module.exports = routes
