let pokemonObject
let url = 'https://pokeapi.co/api/v2/pokemon/charmander'

async function getPokemonFromAPI(url) {
   let data = await fetch(url).catch(errorFunction);
   pokemonObject = await data.json()
   console.log(pokemonObject);
}


function errorFunction() {
    console.log('Fehler aufgetreten',);
}