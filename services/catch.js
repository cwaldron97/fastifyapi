const { catchRepository } = require("../repositories/catch");

function mapResponse(response) {
    return {
        pokemon_name: response.name,
        pokemon_height: response.height,
        pokemon_type: response.types.type.name,
        pokemon_image: response.sprite.front_default
    };
}

function catchService(pokemonName) {
    return mapResponse(catchRepository.catchRepository(pokemonName))
}
