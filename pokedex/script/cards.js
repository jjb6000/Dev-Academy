let url = 'https://pokeapi.co/api/v2/pokemon/';
let cards = [];
let apiDataCards;
let mobMenu = document.getElementById('mobMenu');
let openMenu = false;
let favArray = JSON.parse(localStorage.getItem('favouritePokemons')) || [];
let favArrayImg = JSON.parse(localStorage.getItem('favouritePokemonsIcons')) || [];




// ANCHOR LOAD CARDS FUNCTIONS
async function loadCardsData(url) {
    apiDataCards = await fetchPokemonAPI(url);
    await getCardDetails(apiDataCards);
    checkForFirstSite();
    checkForLastSite();
    renderCards();
    getFavouritPokemons();
}


async function getCardDetails(apiDataCards) {
    let progress = 0;
    for (let i = 0; i < apiDataCards.results.length; i++) {
        let apiDataCardDetails = await fetchPokemonAPI(apiDataCards.results[i].url);
        cards[i] = new Card(apiDataCards.results[i], putTypesInArray(apiDataCardDetails.types), checkImg(apiDataCardDetails))
        progress += 5
        setProgressBar('flex', String(progress))
    }
    setProgressBar('none', '0')
}


function setProgressBar(display, progress) {
    document.getElementById('pBarContainer').style.display = display;
    document.getElementById('pBar').value = progress;
}


function renderCards() {
    cardSection.innerHTML = ''
    for (let i = 0; i < cards.length; i++) {
        cardSection.innerHTML += getCardSectionHTML(cards[i].name.name, cards[i].name.url, cards[i].img, i);
        addTypeTags(cards[i].types, 'tagdiv' + i);
        defineColor(cards[i].name.name, cards[i].types[0]);
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


document.getElementById('navEnd').addEventListener('click', () => {
    resetCardData();
    loadCardsData('https://pokeapi.co/api/v2/pokemon?offset=1300&limit=20');
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
    cards = [];
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


