// SECTION  INIT POKEMON PAGE
const stats = document.getElementById('stats');

async function loadPokemonPage(id) {
    await getPokemon('https://pokeapi.co/api/v2/pokemon/' + id);
    document.getElementById('titleContainer').innerHTML = loadPokemonTitleSection(currentPokemon.name, currentPokemon.id, currentPokemon.imgUrl);
    addTypeTags(currentPokemon.types, 'typeTags');
    defineColor('specs', currentPokemon.types[0])
    loadPokeImg();
    loadAboutSpecs();
    heartBtnCheck()
    hideOrShowSpecsOverlay('flex', 'add')
}


function hideOrShowSpecsOverlay(attr, set) {
    window.scrollTo(0, 0)
    pokemonSection.style.display = attr;
    document.getElementById('filter').style.display = attr;
    addOrRemoveClasses(set, 'startPage', 'hide-on-mobile');
    addOrRemoveClasses(set, 'startPage', 'no-events');
}


function loadPokeImg() {
    setIcon('pokePic', currentPokemon.largeImg);
}
// !SECTION END


// SECTION POKEMON STATISTICS FUNCTIONS
// ANCHOR STATS NAVBAR 
document.getElementById('slider').addEventListener('click', (e) => {
    if (clickWasOnAMenuItem(e.target.children.length)) {
        removeNavbarSelect('slider');
        e.target.classList.add('current-stats')
    }
});


function clickWasOnAMenuItem(childrenOfClickedContainer) {
    return childrenOfClickedContainer == 0 // menu items have no child elements, the navbar container itself has
}


function removeNavbarSelect(id) {
    let array = document.getElementById(id).children;
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('current-stats');
    }
}


function resetNavbarToAbout() {
    removeNavbarSelect('slider');
    document.getElementById('slider').children[0].classList.add('current-stats')
}


// ANCHOR ABOUT SPECS
function loadAboutSpecs() {
    stats.innerHTML = loadAboutSpecsHTML();
    sliderMob.innerHTML = aboutStatsMobileMenuHTML();
}


// ANCHOR BASE STATS
function loadBaseStats() {
    stats.innerHTML = getBaseStatsHTML(currentPokemon.basicStats.reduce((a, b) => a + b, 0));
    drawChart();
    sliderMob.innerHTML = baseStatsMobileMenuHTML();
}


// ANCHOR EVO STATS
function loadEvolution() {
    if (currentPokemon.evolution.evolve) {
        loadEvoBasedOnSteps();
    } else {
        stats.innerHTML = noEvoStatsHTML();
    }
    sliderMob.innerHTML = evoStatsMobileMenuHTML();
}


function loadEvoBasedOnSteps() {
    if (currentPokemon.evolution.evoLevel.length == 1) {
        stats.innerHTML = getEvoStatsForOneEvolutionHTML();
    } else {
        stats.innerHTML = getEvoStatsForTwoEvolutionsHTML();
    }
}


function loadMoves() {
    stats.innerHTML = getMoveTableHTML();
    let array = currentPokemon.moves;
    for (let i = 0; i < array.length; i++) {
        document.getElementById('moveTable').innerHTML += addMoveTableRow(array[i][1], array[i][0]);
    }
    sliderMob.innerHTML = moveStatsMobileMenuHTML();
}
// !SECTION END


// SECTION FAVOURIT POKEMONS
function heartBtnCheck() {
    if (favArray.indexOf(currentPokemon.name) == -1) {
        updateHeart('icons/heart.svg', 'setFavourite()')
    } else {
        updateHeart('icons/heart_fill.svg', 'removeFavourite()')
    }
}


function updateHeart(src, onclickFunction) {
    setIcon('heart', src)
    document.getElementById('heart').setAttribute('onclick', onclickFunction)
}


function setFavourite() {
    favArray.push(currentPokemon.name);
    favArrayImg.push(currentPokemon.imgUrl);
    saveToLS();
    heartBtnCheck();
    renderFavouritsInMenu();
}



function removeFavourite() {
    favArray.splice(favArray.indexOf(currentPokemon.name), 1);
    favArrayImg.splice(favArrayImg.indexOf(currentPokemon.imgUrl), 1);
    saveToLS()
    heartBtnCheck();
    renderFavouritsInMenu();
}


function saveToLS() {
    localStorage.setItem('favouritePokemons', JSON.stringify(favArray));
    localStorage.setItem('favouritePokemonsIcons', JSON.stringify(favArrayImg));
}

