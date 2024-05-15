function getCardSectionHTML(name, url, imgSrc, i) {
    return /*html*/`
        <div onclick="loadPokemonPage('${url}')" id="${name}" class="card clickable">
            <div>
                <h4>${upperCase(name)}</h4>
                <div class="tags" id="${'tagdiv' + i}"></div>
            </div>
            <div class="card-img-container">
                <img src="${imgSrc}" alt="">
            </div>
        </div>
    `
}


function getFavouritsHTML(pokemon, img) {
    return /*html*/`
        <div class="clickable" onclick="loadPokemonPage('${pokemon}')"><img src="${img}" alt="">${upperCase(pokemon)}</div>
    `
}


function getNoFavouritsHTML() {
    return /*html*/`
        <p class="grey-font">No favourite Pokemons</p>
    `
}


function loadPokemonTitleSection(pokeName, pokeID) {
    return /*html*/`

            <div class="title-and-tags">
                <h1>${upperCase(pokeName)}</h1>

                <div class="tags" id="typeTags"></div>
            </div>

            <div class="pokemon-number">#${pokeID}</div>
    `
}


function loadTagHTML(type) {
    return /*html*/`
        <div class="tag d-flex-all-center">${upperCase(type)}</div>
    `
}



function loadAboutSpecsHTML() {
    return /*html*/`
        <div class="about-stats">
                <div class="stat-key grey-font standard-padding">Spiecies</div>
                <div class="stat-value standard-padding">${upperCase(currentPokemon.name)}</div>
                <div class="stat-key grey-font standard-padding">Height</div>
                <div class="stat-value standard-padding">${currentPokemon.about.height}</div>
                <div class="stat-key grey-font standard-padding">Weight</div>
                <div class="stat-value standard-padding">${currentPokemon.about.weight}</div>
                <div class="stat-key grey-font standard-padding">Ability</div>
                <div class="stat-value standard-padding">${currentPokemon.about.abilities}</div>
                <div class="stat-key standard-padding"><b>Breeding</b></div><br>
                <div class="stat-key grey-font standard-padding">Egg Groups</div>
                <div class="stat-value standard-padding">${currentPokemon.about.egg_groups}</div>
                <div class="stat-key grey-font standard-padding">Egg Cycle</div>
                <div class="stat-value standard-padding">${currentPokemon.about.egg_cycle}</div>
        </div>
    `
}


function aboutStatsMobileMenuHTML() {
    return /*html*/`
            <img id="statsNavLeft" src="icons/chevron_left_g.svg" alt="left">
            <p class="current-stats">About</p>
            <img onclick="loadBaseStats()" id="statsNavRight" src="icons/chevron_right.svg" alt="right">
    `
}


function baseStatsMobileMenuHTML() {
    return /*html*/`
            <img onclick="loadAboutSpecs()" id="statsNavLeft" src="icons/chevron_left.svg" alt="left">
            <p class="current-stats">Base Stats</p>
            <img onclick="loadEvolution()" id="statsNavRight" src="icons/chevron_right.svg" alt="right">
    `
}


function evoStatsMobileMenuHTML() {
    return /*html*/`
            <img onclick="loadBaseStats()" id="statsNavLeft" src="icons/chevron_left.svg" alt="left">
            <p class="current-stats">Evolution</p>
            <img onclick="loadMoves()" id="statsNavRight" src="icons/chevron_right.svg" alt="right">
    `
}


function moveStatsMobileMenuHTML() {
    return /*html*/`
            <img onclick="loadBaseStats()" id="statsNavLeft" src="icons/chevron_left.svg" alt="left">
            <p class="current-stats">Moves</p>
            <img id="statsNavRight" src="icons/chevron_right_g.svg" alt="right">
    `
}


function getBaseStatsHTML(total) {
    return /*html*/`
    <div class="chart">
        <canvas id="myChart"></canvas>
    </div>
    <div class="d-flex-start">
        <p class="standard-padding"><b>Total:</b></p>
        <p> ${total}</p>
    </div>
    `
}


function getEvoStatsForTwoEvolutionsHTML() {
    return /*html*/`
    <div class="evo-container d-flex-all-center">
        <div class="evo-pokemon">
            <img src=${currentPokemon.evolution.evoImg[0]} alt="">
            <div>${upperCase(currentPokemon.evolution.name[0])}</div>
        </div>
        <div class="arrow-container">
            <img src="icons/arrow_right.svg" alt="">
            <p>${currentPokemon.evolution.evoLevel[0]}</p>
        </div>
        <div class="evo-pokemon">
            <img src="${currentPokemon.evolution.evoImg[1]}" alt="">
            <div>${upperCase(currentPokemon.evolution.name[1])}</div>
        </div>
        <div class="arrow-container">
            <img src="icons/arrow_right.svg" alt="">
            <p>${currentPokemon.evolution.evoLevel[1]}</p>
        </div>
        <div class="evo-pokemon">
            <img src="${currentPokemon.evolution.evoImg[2]}" alt="">
            <div>${upperCase(currentPokemon.evolution.name[2])}</div>
        </div>
    </div>
    `
}


function noEvoStatsHTML() {
    return /*html*/`
    <div class="evo-container d-flex-all-center">
    This Pokemon doesn't evolve
    </div>
    `
}


function getEvoStatsForOneEvolutionHTML() {
    return /*html*/`
    <div class="evo-container d-flex-all-center">
        <div class="evo-pokemon">
            <img src=${currentPokemon.evolution.evoImg[0]} alt="">
            <div>${upperCase(currentPokemon.evolution.name[0])}</div>
        </div>
        <div class="arrow-container">
            <img src="icons/arrow_right.svg" alt="">
            <p>${currentPokemon.evolution.evoLevel[0]}</p>
        </div>
        <div class="evo-pokemon">
            <img src="${currentPokemon.evolution.evoImg[1]}" alt="">
            <div>${upperCase(currentPokemon.evolution.name[1])}</div>
        </div>
    </div>
    `
}


function getMoveTableHTML() {
    return /*html*/`
    <div class="table-container d-flex-all-center">
    <table class="standard-padding" id=moveTable>
        <tr>
            <th>Move</th>
            <th>learned at Level</th>
        </tr>
    </table>
    </div>
    `
}

function addMoveTableRow(move, level) {
    return /*html*/`
        <tr>
            <td class="ta-start">${upperCase(move)}</td>
            <td>${level}</td>
        </tr>
    `
}