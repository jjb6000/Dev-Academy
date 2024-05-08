let url = 'https://pokeapi.co/api/v2/pokemon/';
let Cards = {};
let apiDataCards;
let mobMenu = document.getElementById('mobMenu');
let openMenu = false;
let favArray = JSON.parse(localStorage.getItem('favouritePokemons')) || [];
let favArrayImg = JSON.parse(localStorage.getItem('favouritePokemonsIcons')) || [];
Cards.names = [];
Cards.types = [];
Cards.imgs = [];



// ANCHOR LOAD CARDS FUNCTIONS
async function loadCardsData(url) {
    apiDataCards = await fetchPokemonAPI(url);
    getNames(apiDataCards);
    await getCardDetails();
    checkForFirstSite();
    checkForLastSite();
    renderCards(Cards);
    getFavouritPokemons();
}


function getNames(apiDataCards) {
    for (let i = 0; i < apiDataCards.results.length; i++) {
        Cards.names.push(apiDataCards.results[i]);
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
    }
}



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
    if (firstSite()) {
        return
    } else {
        resetCardData();
        loadCardsData(apiDataCards.previous);
    }
});


moreBtn.addEventListener('click', () => {
    if (lastSite()) {
        return
    } else {
        resetCardData();
        toStart();
        loadCardsData(apiDataCards.next);
    }
});


function resetCardData() {
    Cards.names = [];
    Cards.types = [];
    Cards.imgs = [];
}


function checkForFirstSite() {
    if (firstSite()) {
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


function checkForLastSite() {
    if (lastSite()) {
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


// ANCHOR FAV IN MENU
function getFavouritPokemons() {
    if (favArray.length > 0) {
        renderFavouritsInMenu();
    } else {
        document.getElementById('navFav').innerHTML = getNoFavouritsHTML();
    }
}


function renderFavouritsInMenu() {
    document.getElementById('navFav').innerHTML = '';
    for (let i = 0; i < favArray.length; i++) {
        document.getElementById('navFav').innerHTML += getFavouritsHTML(favArray[i], favArrayImg[i]);  
    }
}


