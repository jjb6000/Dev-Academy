let url = 'https://pokeapi.co/api/v2/pokemon/';
let Cards = {};
let twentyPokemons;
let mobMenu = document.getElementById('mobMenu');
let openMenu = false;
let favArray = JSON.parse(localStorage.getItem('favouritePokemons')) || [];
Cards.names = [];
Cards.types = [];
Cards.imgs = [];



// ANCHOR MENU FUNCTIONS
function openOrClose() {
    if (openMenu == false) {
        showMenu('flex', true);
    } else {
        showMenu('none', false);
    }
}


function showMenu(attr, boolean) {
    mobMenu.style.display = attr;
    openMenu = boolean
}


document.getElementById('navStart').addEventListener('click', () => {
    location.reload();
});


resetBtn.addEventListener('click', () => {
    if (firstPokemon(Cards.names[0].name)) {
        return
    } else {
        resetCardData();
        loadCardsData(twentyPokemons.previous);
    }
});


moreBtn.addEventListener('click', () => {
    if (lastPokemon(cardSection.children[cardSection.children.length - 1].id)) {
        return
    } else {
        resetCardData();
        toStart();
        loadCardsData(twentyPokemons.next);
    }
});


function resetCardData() {
    Cards.names = [];
    Cards.types = [];
    Cards.imgs = [];
}


function checkForFirstPokemon(firstCard) {
    if (firstPokemon(firstCard)) {
        nonFunctionalResetBtn();
    } else {
        functionalResetBtn();
    }
}


function functionalResetBtn() {
    addOrRemoveClasses('add', 'resetBtn', 'clickable');
    setIcon('resetBtn', 'icons/back_b.svg')
}


function nonFunctionalResetBtn() {
    addOrRemoveClasses('remove', 'resetBtn', 'clickable');
    setIcon('resetBtn', 'icons/back_g.svg')
}


function checkForLastPokemon(lastCard) {
    if (lastPokemon(lastCard)) {
        nonFunctionalMoreBtn();
    } else {
        functionalMoreBtn();        
    }
}


function functionalMoreBtn() {
    addOrRemoveClasses('add', 'moreBtn', 'clickable');
    setIcon('moreIcon', 'icons/expand_more.svg')
}


function nonFunctionalMoreBtn() {
    addOrRemoveClasses('remove', 'moreBtn', 'clickable');
    setIcon('moreIcon', 'icons/expand_more_g.svg')
}


function toStart() {
    window.scrollTo(0, 0);
}


// ANCHOR LOAD CARDS FUNCTIONS
async function loadCardsData(url) {
    twentyPokemons = await fetchPokemonAPI(url);
    getNames(twentyPokemons);
    await getCardDetails();
    checkForFirstPokemon(Cards.names[0].name);
    checkForLastPokemon(cardSection.children[cardSection.children.length - 1].id)
}


function getNames(twentyPokemons) {
    for (let i = 0; i < twentyPokemons.results.length; i++) {
        Cards.names.push(twentyPokemons.results[i]);
    }
}


async function getCardDetails() {
    let progress = 0;
    for (let i = 0; i < Cards.names.length; i++) {
        let apiData = await fetchPokemonAPI(Cards.names[i].url);
        Cards.imgs.push(apiData.sprites.front_default);
        Cards.types.push(putTypesInArray(apiData.types));
        progress += 5
        setProgressBar('flex', String(progress))
    }
    renderCards(Cards);
    setProgressBar('none', '0')
}


function setProgressBar(display, progress) {
    document.getElementById('pBarContainer').style.display = display;
    document.getElementById('pBar').value = progress;
}


function renderCards(Cards) {
    cardSection.innerHTML = ''
    for (let i = 0; i < Cards.names.length; i++) {
        cardSection.innerHTML += getCardSectionHTML(Cards.names[i].name, Cards.imgs[i], i);
        addTypeTags(Cards.types[i], 'tagdiv' + i);
        defineColor(Cards.names[i].name, Cards.types[i][0]);
        colorForSecondTag();
    }
}


function colorForSecondTag() {
    let tags = document.getElementsByClassName('tags')
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].children.length == 2) {
            tags[i].children[1].style.backgroundColor = TYPE_COLORS[tags[i].children[1].innerHTML];
            tags[i].children[1].style.filter = 'grayscale(32%)'
        };
    }
}






