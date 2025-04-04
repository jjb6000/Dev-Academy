let cards = [];
let apiDataCards;
let allPokemons;
let mobMenu = document.getElementById('mobMenu');
let favArray = JSON.parse(localStorage.getItem('favouritePokemons')) || [];
let favArrayImg = JSON.parse(localStorage.getItem('favouritePokemonsIcons')) || [];




// ANCHOR LOAD CARDS FUNCTIONS
async function initialLoad() {
    getFavouritPokemons();
    appStatus.request_pending = true;
    await loadCardsData('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=80');
    renderCards(0, 4);
    getAmountsOfCardsFittingViewport();
    renderCards(0, cardSection.children.length + appStatus.initialAmountOfCardsMinusFour);
    appStatus.request_pending = false;
}


function getAmountsOfCardsFittingViewport() {
    let cardSpaceH = window.visualViewport.height - document.getElementById('headerSectionStart').clientHeight;
    let rows = Math.floor(cardSpaceH / document.getElementsByClassName('card')[0].clientHeight);
    initialAmountOfCardsMinusFour = (rows * getWidthMultiplicator()) - 4;
    if (initialAmountOfCardsMinusFour > 16) {
        initialAmountOfCardsMinusFour = 16;
    } 
    appStatus.initialAmountOfCardsMinusFour = initialAmountOfCardsMinusFour;
}


function getWidthMultiplicator() {
    let cardsInRowimageIndex = 1
    for (let i = 1; i < 4; i++) {
        if (hasNeighborInSameRow(i)) {
            cardsInRowimageIndex++
        } else {
            break
        }
    }
    appStatus.cardsInRow = cardsInRowimageIndex;
    return cardsInRowimageIndex;
}


function hasNeighborInSameRow(i) {
    return document.getElementsByClassName('card')[0].getBoundingClientRect().left < document.getElementsByClassName('card')[i].getBoundingClientRect().left
}


document.addEventListener('scrollend', () => {
    if (window.scrollY > appStatus.lowest_scroll) {
        console.log('load');
        renderCards(0, cardSection.children.length + appStatus.initialAmountOfCardsMinusFour);
        appStatus.lowest_scroll = window.scrollY;
        hiddenLoad();
    } else {
        console.log('no load');
    }
});


async function hiddenLoad() {
    if (cardSection.children.length > cards.length / 2 && !lastSite() && !appStatus.request_pending) {
        console.info('fetch');
        await loadCardsData(apiDataCards.next);
    } 
}


function firstCards() {
    return appStatus.initialAmountOfCardsMinusFour + 4 == cards.length
}


async function loadCardsData(url) {
    appStatus.request_pending = true;
    apiDataCards = await fetchPokemonAPI(url);
    await getCardDetails(apiDataCards);
    appStatus.request_pending = false;
}


async function getCardDetails(apiDataCards) {
    let progress = 0;
    for (let i = 0; i < apiDataCards.results.length; i++) {
        let apiDataCardDetails = await fetchPokemonAPI(apiDataCards.results[i].url);
        cards.push(new Card(apiDataCards.results[i], putTypesInArray(apiDataCardDetails.types), checkImg(apiDataCardDetails)));
        progress += 5;
        setProgressBar('flex', String(progress))
    }
    setProgressBar('none', '0')
}


function setProgressBar(display, progress) {
    document.getElementById('pBarContainer').style.display = display;
    document.getElementById('pBar').value = progress;
}


function renderCards(start, end) {
    cardSection.innerHTML = '';
    for (let i = start; i < end; i++) {
        cardSection.innerHTML += getCardSectionHTML(cards[i].name.name, cards[i].name.url, cards[i].img, i);
        addTypeTags(cards[i].types, 'tagdiv' + i);
        defineColor(cards[i].name.name, cards[i].types[0]);
    }
}



// ANCHOR MENU FUNCTIONS
pokeSearch.addEventListener('click', async () => {
    clearSearchResults();
    let allNames = await fetchAllPokemons();

    pokeSearch.addEventListener('search', (event) => {
        checkSearchInput(allNames, event.type);
    });
    
    pokeSearch.addEventListener('input', (event) => {
        checkSearchInput(allNames, event.type);
    });
});


async function fetchAllPokemons() {
    pokeSearch.placeholder = 'Loading...';
    if (allPokemons == undefined) {
        allPokemons = await fetchPokemonAPI('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1400');
    }
    pokeSearch.placeholder = 'Search your Pokemon...';
    return initSearchArray(allPokemons)
}


function initSearchArray(allPokemons) {
    let allNames = [];
    for (let i = 0; i < allPokemons.results.length; i++) {
        allNames.push(allPokemons.results[i].name);
    }
    return allNames
}


function checkSearchInput(names, eventType) {
    console.log(eventType);
    if (pokeSearch.value == '') {
        clearSearchResults()
    } else if(eventType == 'input') {
        searchAll(names)
    }
}


function searchAll(names) {
    let results = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].indexOf(pokeSearch.value.toLowerCase()) > -1 && pokeSearch.value != '') {
            results.push(names[i]);
            showResults(results)
        }
    }
}


function showResults(results) {
    clearSearchResults()
    for (let i = 0; i < setLoopNotLongerThanFive(results); i++) {
        searchResults.innerHTML += loadSearchResultHTML(results[i]);
    }
}


function clearSearchResults() {
    searchResults.innerHTML = ''
}


function setLoopNotLongerThanFive(results) {
    if (results.length > 5) {
        return 5;
    } else {
        return results.length
    }
}



function openOrClose() {
    if (appStatus.openMenu == false) {
        showMenu('flex', true);
    } else {
        showMenu('none', false);
    }
}


function showMenu(attr, boolean) {
    mobMenu.style.display = attr;
    appStatus.openMenu = boolean;
}


document.getElementById('navStart').addEventListener('click', () => {
    resetCardData();
    initialLoad();
});


function toStart() {
    window.scrollTo(0, 0);
}


document.getElementById('body').addEventListener('click', (e) => {
    if (e.target.id == 'filter') {
        hideOrShowSpecsOverlay('none', 'remove');
        resetNavbarToAbout();
    }
})


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
        document.getElementById('navFav').innerHTML += getFavouritsHTML(favArray[i], getURL(favArray[i]), favArrayImg[i]);
    }
}


function getURL(name) {
    return 'https://pokeapi.co/api/v2/pokemon/' + String(name);
}


