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


module.exports = allPokemon