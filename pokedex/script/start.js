let url = 'https://pokeapi.co/api/v2/pokemon/';
let Cards = {};
Cards.names = [];
Cards.types = []
Cards.img = [];

async function loadCardsData(url) {
    let twentyPokemons = await fetchPokemonAPI(url);
    getNames(twentyPokemons);
    getCardDetails();
    renderCards();
}


function getNames(twentyPokemons) {
    for (let i = 0; i < twentyPokemons.results.length; i++) {
        Cards.names.push(twentyPokemons.results[i]);    
    }
}


async function getCardDetails() {
    for (let i = 0; i < Cards.names.length; i++) {
        let pokemonObject = await fetchPokemonAPI(Cards.names[i].url);
        Cards.types.push(putTypesInArray(pokemonObject.types));
        Cards.img.push(pokemonObject.sprites.front_default);
    }
}


function putTypesInArray(array) {
    let types = [];
    for (let i = 0; i < array.length; i++) {
        types.push(array[i].type.name);
    }
    return types;
}


function defineColor(params) {
    // group pokemons in arrays to define which groups need same color

    // ODER based on https://pokemondb.net/type/poison dual type attack oder pokedex entries? <- wahrscheinlich zu ungenau
}


function colorOrder() {
    
    // if last color green
    //  then red , if red then blue, if blue then yellow
}


function renderCards() {
    cardSection.innerHTML = ''
    for (let i = 0; i < Cards.names.length; i++) {
        cardSection.innerHTML += getCardSectionHTML(Cards.names[i].name, Cards.img[i], i);
        
    }
}