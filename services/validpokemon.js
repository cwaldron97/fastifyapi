const { catchRepository } = require("../repositories/catch");

export function validPokemon(pokemonName) {
    if (catchRepository.catchRepository(pokemonName) === 'undefined') {
        return false
    }
    else {
        return true
    }
}