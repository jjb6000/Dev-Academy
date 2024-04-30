let pokemonObject;
let currentPokemon;
let evoObject;
let url = 'https://pokeapi.co/api/v2/pokemon/charmander'

let labels = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
let stats;



// ANCHOR POKEMON FETCH API
async function getPokemon() {
    pokemonObject = await fetchPokemonAPI(url);
    let breedingObject = await fetchPokemonAPI(pokemonObject.species.url);
    evoObject = await fetchPokemonAPI(breedingObject.evolution_chain.url)
    console.log(breedingObject);
    console.log(evoObject);
    buildCurrentPokemon(pokemonObject, breedingObject, evoObject);
}


async function fetchPokemonAPI(url) {
    let data = await fetch(url).catch(errorFunction);
    return await data.json()
}


function errorFunction() {
    console.log('Fehler aufgetreten',);
}

// Function to fill json w/ all information from multiple endpoints so all the loops and conversions are only called once 
function buildCurrentPokemon(pokemonObject, breedingObject, evoObject) {
    currentPokemon = {
        name: pokemonObject['species'].name,
        id: pokemonObject.id,
        imgUrl: pokemonObject.sprites.front_default,
        about: {
            height: pokemonObject.height,
            weight: pokemonObject.weight,
            abilities: returnMultipleAbilitiesInOneString(pokemonObject.abilities),
            egg_groups: returnMultipleEggGroupsInOneString(breedingObject.egg_groups),
            egg_cycle: breedingObject.hatch_counter
        },
        basicStats: getBasicStatsFromAPI(),
        evolution: {
            evolve: doesItEvolve(evoObject)
        },
        moves: {
            move: [],
            level: []
        }
    }

    if (currentPokemon.evolution.evolve) {
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


function convertToString(array) {
    return array.toString().replaceAll(',', ', ')
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
    if (thirdEvolutionStepTrue(evoObject)) {
        currentPokemon.evolution.evoLevel = [evoObject.chain.evolves_to[0].evolution_details[0].min_level];
    } else {
        currentPokemon.evolution.evoLevel = [evoObject.chain.evolves_to[0].evolution_details[0].min_level, evoObject.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level];
        currentPokemon.evolution.evoImg = [buildImgUrl(evoObject.chain.species.url), buildImgUrl(evoObject.chain.evolves_to[0].species.url), buildImgUrl(evoObject.chain.evolves_to[0].evolves_to[0].species.url)]
    }
}


function buildImgUrl(str) {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + str.charAt(str.length - 2) + '.png'
}


function thirdEvolutionStepTrue(evoObject) {
    return evoObject.chain.evolves_to[0].evolves_to.length == 0
}


// ANCHOR MOVES
function addMovesToCurrentPokemon() {
    for (let i = 0; i < pokemonObject.moves.length; i++) {
        if (pokemonObject.moves[i].version_group_details[0].level_learned_at > 1) {
            
        }   
    }
}


// ANCHOR   GRAPH CONFIGS
const CONFIG_BG_COLOR = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
];

const CONFIG_BORDER_COLOR = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
];

const CONFIG_CHART_OPTIONS = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        }
    }
}