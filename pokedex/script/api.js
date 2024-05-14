let apiData;
let currentPokemon = {};
let apiDataEvolution;
let apiDataBreeding;



// ANCHOR POKEMON FETCH API
async function getPokemon(url) {
    apiData = await fetchPokemonAPI(url);
    apiDataBreeding = await fetchPokemonAPI(apiData.species.url);
    apiDataEvolution = await fetchPokemonAPI(apiDataBreeding.evolution_chain.url);
    buildCurrentPokemon(apiData);
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
// Function to fill json w/ all information from multiple endpoints so all the loops and checks are only called once 
function buildCurrentPokemon(apiData) {
    currentPokemon.name = apiData['species'].name;
    currentPokemon.types = putTypesInArray(apiData.types);
    currentPokemon.id = apiData.id;
    currentPokemon.imgUrl = apiData.sprites.front_default;
    currentPokemon.largeImg = checkImg(apiData);
    addAboutToCurruntPokemon(apiData, apiDataBreeding);
    addMoreStatsToCurrentPokemon(apiDataEvolution)
}


function addAboutToCurruntPokemon() {
    currentPokemon.about = {
        height: apiData.height,
        weight: apiData.weight,
        abilities: returnMultipleAbilitiesInOneString(apiData.abilities),
        egg_groups: returnMultipleEggGroupsInOneString(apiDataBreeding.egg_groups),
        egg_cycle: apiDataBreeding.hatch_counter
    }
}


function addMoreStatsToCurrentPokemon() {
    currentPokemon.basicStats = getBasicStatsFromAPI();
    currentPokemon.evolution = {
        evolve: doesItEvolve()
    }
    if (currentPokemon.evolution.evolve) {
        currentPokemon.evolution.evoLevel = [];
        currentPokemon.evolution.evoImg = [];
        currentPokemon.evolution.name = [];
        addEvolution();
    }
}


// ANCHOR ABOUT STATS
function returnMultipleAbilitiesInOneString(array) {
    let abilityArray = [];
    for (let i = 0; i < array.length; i++) {
        abilityArray.push(upperCase(array[i].ability.name));
    }
    return convertToString(abilityArray);
}


function returnMultipleEggGroupsInOneString(array) {
    let eggArray = [];
    for (let i = 0; i < array.length; i++) {
        eggArray.push(upperCase(array[i].name));
    }
    return convertToString(eggArray);
}



// ANCHOR BASI STATS
function getBasicStatsFromAPI() {
    let basicStats = [];
    for (let i = 0; i < apiData.stats.length; i++) {
        basicStats.push(apiData.stats[i].base_stat);
    }
    return basicStats
}



// ANCHOR EVO
function doesItEvolve() {
    if (apiDataEvolution.chain.evolves_to.length == 0) {
        return false;
    } else {
        return true;
    }
}


function addEvolution() {
    currentPokemon.evolution.evoLevel = [checkBabyPokemon(apiDataEvolution.chain.evolves_to[0].evolution_details[0].min_level)];
    currentPokemon.evolution.evoImg = [buildImgUrl(apiDataEvolution.chain.species.url), buildImgUrl(apiDataEvolution.chain.evolves_to[0].species.url)];
    currentPokemon.evolution.name = [apiDataEvolution.chain.species.name, apiDataEvolution.chain.evolves_to[0].species.name];
    checkForThirdEvoStep(apiDataEvolution)
}


function checkForThirdEvoStep() {
    if (apiDataEvolution.chain.evolves_to[0].evolves_to.length != 0) {
        currentPokemon.evolution.evoLevel.push(checkBabyPokemon(apiDataEvolution.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level));
        currentPokemon.evolution.evoImg.push(buildImgUrl(apiDataEvolution.chain.evolves_to[0].evolves_to[0].species.url));
        currentPokemon.evolution.name.push(apiDataEvolution.chain.evolves_to[0].evolves_to[0].species.name);
    }
}


function checkBabyPokemon(level) {
    if (apiDataEvolution.chain.is_baby) {
        return 'Baby Pokemon'
    } else {
        return checkIfLevelIsNotNull(level);
    }
}

function checkIfLevelIsNotNull(level) {
    if (level == null) {
        return '';
    } else {
        return 'Level ' + String(level);
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
    for (let i = 0; i < apiData.moves.length; i++) {
        if (apiData.moves[i].version_group_details[0].level_learned_at >= 1) {
            currentPokemon.moves.push([apiData.moves[i].version_group_details[0].level_learned_at, apiData.moves[i].move.name]);
        }
    }
    currentPokemon.moves.sort((a, b) => a[0] - b[0])
}

