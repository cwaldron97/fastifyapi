const { catchRepository } = require("../repositories/catch");

function validPokemon(pokemonName) {
    const bool = false
    if (catchRepository.catchRepository(pokemonName) === 'undefined') {
        bool = false
    }
    else {
        bool = true
    }
    return bool
}

