
// SECTION  INIT POKEMON PAGE
const stats = document.getElementById('stats');

async function loadPokemonPage(id) {
    await getPokemon('https://pokeapi.co/api/v2/pokemon/' + id);
    document.getElementById('titleContainer').innerHTML = loadPokemonTitleSection(pokemonObject['species'].name, pokemonObject.id, pokemonObject.sprites.front_default);
    addTypeTags(currentPokemon.types, 'typeTags');
    defineColor('pokeBg', currentPokemon.types[0])
    loadPokeImg();
    loadAboutSpecs();
    hideOrShowSpecsOverlay('block', 'add')
}

function hideOrShowSpecsOverlay(attr, set) {
    pokemonSection.style.display = attr;
    addOrRemoveClasses(set, 'startPage', 'hide-on-mobile');
}


function loadPokeImg() {
    setIcon('pokePic', pokemonObject.sprites.other.dream_world.front_default);
}

// !SECTION END

// SECTION POKEMON STATISTICS FUNCTIONS
// ANCHOR STATS NAVBAR 

document.getElementById('slider').addEventListener('click', (e) => {
    if (clickWasOnAMenuItem(e.target.children.length)) {
        removeNavbarSelect();
        e.target.classList.add('current-stats')
    }
})



function clickWasOnAMenuItem(childrenOfClickedContainer) {
    return childrenOfClickedContainer == 0 // menu items have no child elements, the navbar container itself has
}


function removeNavbarSelect() {
    let array = document.getElementById('slider').children;
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('current-stats');
    }
}


function resetNavbarToAbout() {
    removeNavbarSelect();
    document.getElementById('slider').children[0].classList.add('current-stats')
}


// ANCHOR ABOUT SPECS
function loadAboutSpecs() {
    stats.innerHTML = loadAboutSpecsHTML()
}


// ANCHOR BASE STATS
function loadBaseStats() {
    stats.innerHTML = getBaseStatsHTML(currentPokemon.basicStats.reduce((a, b) => a + b, 0));
    drawChart();
}


// ANCHOR EVO STATS
function loadEvolution() {
    if (currentPokemon.evolution.evolve) {
        loadEvoBasedOnSteps()
    } else {
        stats.innerHTML = "This Pokemon doesn't evolve"
    }
}


function loadEvoBasedOnSteps() {
    if (currentPokemon.evolution.evoLevel.length == 1) {
        stats.innerHTML = getEvoStatsForOneEvolutionHTML()
    } else {
        stats.innerHTML = getEvoStatsForTwoEvolutionsHTML()
    }
}


function loadMoves() {
    stats.innerHTML = getMoveTableHTML();
    let array = currentPokemon.moves;
    for (let i = 0; i < array.length; i++) {
        document.getElementById('moveTable').innerHTML += addMoveTableRow(array[i][1], array[i][0]);        
    }
}





// !SECTION END

