let pokemonObject;
let currentPokemon;
let url = 'https://pokeapi.co/api/v2/pokemon/rattata'

let basicStats = [];
let labels = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
let stats;



// ANCHOR POKEMON FETCH API
async function getPokemon() {
    pokemonObject = await fetchPokemonAPI(url);
    let breedingObject = await fetchPokemonAPI(pokemonObject.species.url);
    let evolutionObject = await fetchPokemonAPI(breedingObject.evolution_chain.url);
    console.log(breedingObject);
    console.log(evolutionObject)
    buildCurrentPokemon(pokemonObject, breedingObject);
}


async function fetchPokemonAPI(url) {
    let data = await fetch(url).catch(errorFunction);
    return await data.json()
}


function errorFunction() {
    console.log('Fehler aufgetreten',);
}


function buildCurrentPokemon(pokemonObject, breedingObject) {
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
        }
    }
}

// TODO ERST array erzeugen, dann mit tostring umwandeln
function returnMultipleAbilitiesInOneString(array) {
    let string = array[0].ability.name;
    for (let i = 1; i < array.length; i++) {
        if (i == array.length) {
            string = string + array[i].ability.name;
        } else {
            string = string + ', ' + array[i].ability.name;
        }
    }
    return string;
}


function returnMultipleEggGroupsInOneString(array) {
    let string = array[0].name;
    for (let i = 1; i < array.length; i++) {
        if (i == array.length) {
            string = string + array[i].name;
        } else {
            string = string + ', ' + array[i].name;
        }
    }
    return string;
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