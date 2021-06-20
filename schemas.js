const allPokemon = {
    response: {
        200: {
            type: 'object',
            properties: {
                rows: {
                  type: 'array',
                  items: { 
                    type: 'object', 
                    properties: {
                      id: { type: 'integer' },
                      name: { type: 'string' }
                    }
                 }
               },
               totalnumberofpokemoncaught: { type: 'integer' }
             }
            }
        }
}

const catchPokemon = {
    body: {
        type: 'object',
        required: ['pokemonName'],
        properties: {
            pokemonName: {type: 'string'}
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                pokemon_name: {type: 'string'},
                pokemon_height: {type: 'integer'},
                pokemon_type: {type: 'string'},
                //need to see if it should be a Base64 string or just a webaddress is fine
                pokemon_image: {type: 'string'}
            }

        }
    }


}

module.exports = {allPokemon, catchPokemon}