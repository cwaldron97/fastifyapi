const allPokemon = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                required: ['id', 'name'],
                properties: {
                    id: {type: 'integer'},
                    name: {type: 'string'},
                }
            }
        }
    }
}