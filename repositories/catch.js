export async function catchRepository(pokemonName) {
    return await request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
   }