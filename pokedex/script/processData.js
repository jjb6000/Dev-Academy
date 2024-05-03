let pokemonObject;
let currentPokemon = {};



// ANCHOR POKEMON FETCH API
async function getPokemon(url) {
    pokemonObject = await fetchPokemonAPI(url);
    let breedingObject = await fetchPokemonAPI(pokemonObject.species.url);
    let evoObject = await fetchPokemonAPI(breedingObject.evolution_chain.url)
    console.log(evoObject)
    buildCurrentPokemon(pokemonObject, breedingObject, evoObject);
    addMovesToCurrentPokemon();
}


async function fetchPokemonAPI(url) {
    let data = await fetch(url).catch(errorFunction);
    return await data.json()
}


function errorFunction() {
    console.log('Fehler aufgetreten',);
}


// ANCHOR build currentPokemon object
// Function to fill json w/ all information from multiple endpoints so all the loops and conversions are only called once 
function buildCurrentPokemon(pokemonObject, breedingObject, evoObject) {
    currentPokemon.name = pokemonObject['species'].name;
    currentPokemon.types = putTypesInArray(pokemonObject.types);
    currentPokemon.id = pokemonObject.id;
    currentPokemon.imgUrl = pokemonObject.sprites.front_default;
    addAboutToCurruntPokemon(pokemonObject, breedingObject);
    addMoreStatsToCurrentPokemon(evoObject)
}


function addAboutToCurruntPokemon(pokemonObject, breedingObject) {
    currentPokemon.about = {
        height: pokemonObject.height,
        weight: pokemonObject.weight,
        abilities: returnMultipleAbilitiesInOneString(pokemonObject.abilities),
        egg_groups: returnMultipleEggGroupsInOneString(breedingObject.egg_groups),
        egg_cycle: breedingObject.hatch_counter
    }
}


function addMoreStatsToCurrentPokemon(evoObject) {
    currentPokemon.basicStats = getBasicStatsFromAPI();
    currentPokemon.evolution = {
        evolve: doesItEvolve(evoObject)
    }
    if (currentPokemon.evolution.evolve) {
        currentPokemon.evolution.evoLevel = [];
        currentPokemon.evolution.evoImg = [];
        currentPokemon.evolution.name = [];
        addEvolution(evoObject);
    }
}



// ANCHOR ABOUT STATS
function returnMultipleAbilitiesInOneString(array) {
    let abilityArray = [];
    for (let i = 0; i < array.length; i++) {
        abilityArray.push(array[i].ability.name);
    }
    return convertToString(abilityArray);
}


function returnMultipleEggGroupsInOneString(array) {
    let eggArray = [];
    for (let i = 0; i < array.length; i++) {
        eggArray.push(array[i].name);
    }
    return convertToString(eggArray);
}



// ANCHOR BASI STATS
function getBasicStatsFromAPI() {
    let basicStats = [];
    for (let i = 0; i < pokemonObject.stats.length; i++) {
        basicStats.push(pokemonObject.stats[i].base_stat);
    }
    return basicStats
}



// ANCHOR EVO
function doesItEvolve(evoObject) {
    if (evoObject.chain.evolves_to.length == 0) {
        return false;
    } else {
        return true;
    }
}


function addEvolution(evoObject) {
    currentPokemon.evolution.evoLevel = [evoObject.chain.evolves_to[0].evolution_details[0].min_level];
    currentPokemon.evolution.evoImg = [buildImgUrl(evoObject.chain.species.url), buildImgUrl(evoObject.chain.evolves_to[0].species.url)];
    currentPokemon.evolution.name = [evoObject.chain.species.name, evoObject.chain.evolves_to[0].species.name];
    checkForThirdEvoStep(evoObject)
}

function checkForThirdEvoStep(evoObject) {
    if (evoObject.chain.evolves_to[0].evolves_to.length != 0) {
        currentPokemon.evolution.evoLevel.push(evoObject.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level);
        currentPokemon.evolution.evoImg.push(buildImgUrl(evoObject.chain.evolves_to[0].evolves_to[0].species.url));
        currentPokemon.evolution.name.push(evoObject.chain.evolves_to[0].evolves_to[0].species.name);
    }
}


function buildImgUrl(str) {
    const strRemovedUrl = str.replace('https://pokeapi.co/api/v2/pokemon-species/', '');
    const numberString = strRemovedUrl.replace('/', '');
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numberString + '.png'
}



// ANCHOR MOVES
function addMovesToCurrentPokemon() {
    currentPokemon.moves = []
    for (let i = 0; i < pokemonObject.moves.length; i++) {
        if (pokemonObject.moves[i].version_group_details[0].level_learned_at >= 1) {
            currentPokemon.moves.push([pokemonObject.moves[i].version_group_details[0].level_learned_at, pokemonObject.moves[i].move.name]);
        }
    }
}

