
// SECTION  INIT POKEMON PAGE

function loadPokemonPage() {
    document.getElementById('titleContainer').innerHTML = loadPokemonTitleSection(pokemonObject['species'].name, pokemonObject.id, pokemonObject.sprites.front_default);
    addTypeTags(pokemonObject.types);
    loadPokeImg();
    stats = document.getElementById('stats');
    loadAboutSpecs();
}


function addTypeTags(array) {
    for (let i = 0; i < array.length; i++) {
        document.getElementById('typeTags').innerHTML += loadTagHTML(array[i].type.name);
    }
}


function loadPokeImg() {
    document.getElementById('pokePic').src = pokemonObject.sprites.other.dream_world.front_default
}

// !SECTION END

// SECTION POKEMON STATISTICS FUNCTIONS
// ANCHOR STATS NAVBAR 

document.getElementById('slider').addEventListener('click', (e) => {
    if (clickWasOnAMenuItem(e.target.children.length)) {
        removeNavbarSelect();
        e.target.classList.add('current-stats')
    };
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


// ANCHOR ABOUT SPECS
function loadAboutSpecs() {
    stats.innerHTML = loadAboutSpecsHTML(pokemonObject.species.name, pokemonObject.height, pokemonObject.weight, returnMultipleAbilitiesInOneString(pokemonObject.abilities))
}


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

// ANCHOR BASE STATS
function loadBaseStats() {
    getBasicStatsFromAPI();
    stats.innerHTML = getBaseStatsHTML(basicStats.reduce((a, b) => a + b, 0));
    drawChart();
}

function getBasicStatsFromAPI() {
    for (let i = 0; i < pokemonObject.stats.length; i++) {
        basicStats.push(pokemonObject.stats[i].base_stat);
    }
}



// !SECTION END