let url = 'https://pokeapi.co/api/v2/pokemon/';
let Cards = {};
Cards.names = [];
Cards.types = []
Cards.imgs = [];

async function loadCardsData(url) {
    let twentyPokemons = await fetchPokemonAPI(url);
    getNames(twentyPokemons);
    getCardDetails();
}


function getNames(twentyPokemons) {
    for (let i = 0; i < twentyPokemons.results.length; i++) {
        Cards.names.push(twentyPokemons.results[i]);    
    }
}


async function getCardDetails() {
    let progress = 0;
    for (let i = 0; i < Cards.names.length; i++) {
        let pokemonObject = await fetchPokemonAPI(Cards.names[i].url);
        Cards.imgs.push(pokemonObject.sprites.front_default);
        Cards.types.push(putTypesInArray(pokemonObject.types));
        progress+=5
        setProgressBar('flex', String(progress))
    }
    renderCards(Cards);
    setProgressBar('none', '0')
}


function setProgressBar(display, progress) {
    document.getElementById('pBarContainer').style.display = display;
    document.getElementById('pBar').value = progress;
}


function defineColor(params) {
    // group pokemons in arrays to define which groups need same color

    // ODER based on https://pokemondb.net/type/poison dual type attack oder pokedex entries? <- wahrscheinlich zu ungenau
}


function colorOrder() {
    
    // if last color green
    //  then red , if red then blue, if blue then yellow
}


function renderCards(Cards) {
    cardSection.innerHTML = ''
    for (let i = 0; i < Cards.names.length; i++) {
        cardSection.innerHTML += getCardSectionHTML(Cards.names[i].name, Cards.imgs[i], i);
        addTypeTags(Cards.types[i], 'tagdiv' + i)
    }
}


function addTypeTags(array, id) {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(id).innerHTML += loadTagHTML(array[i]);
    }
}



cardSection.addEventListener('click', (e) => {
    if (clickWasOnCard(e.target.id)) {
        loadPokemonPage(e.target.id)
    };
})

function clickWasOnCard(id) {
    return id != 'cardSection'
}

