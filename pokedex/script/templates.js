function getCardSectionHTML(name, imgSrc, i) {
    return /*html*/`
        <div onclick="loadPokemonPage('${name}')" id="${name}" class="card clickable">
            <div>
                <h4>${name}</h4>
                <div class="tags" id="${'tagdiv' + i}"></div>
            </div>
            <div class="card-img-container">
                <img src="${imgSrc}" alt="">
            </div>
        </div>
    `
}

function loadPokemonTitleSection(pokeName, pokeID) {
    return /*html*/`

            <div class="title-and-tags">
                <h1>${pokeName}</h1>

                <div class="tags" id="typeTags"></div>
            </div>

            <div class="pokemon-number">#${pokeID}</div>
    `
}


function loadTagHTML(type) {
    return /*html*/`
        <div class="tag d-flex-all-center">${type}</div>
    `
}


function loadAboutSpecsHTML() {
    return /*html*/`
        <div class="about-stats">
                <div class="stat-key grey-font standard-padding">Spiecies</div>
                <div class="stat-value standard-padding">${currentPokemon.name}</div>
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
        <img src=${currentPokemon.evolution.evoImg[0]} alt="">
        <div class="arrow-container">
            <img src="icons/arrow_right.svg" alt="">
            <p>${currentPokemon.evolution.evoLevel[0]}</p>
        </div>
        <img src="${currentPokemon.evolution.evoImg[1]}" alt="">
        <div class="arrow-container">
            <img src="icons/arrow_right.svg" alt="">
            <p>${currentPokemon.evolution.evoLevel[1]}</p>
        </div>
        <img src="${currentPokemon.evolution.evoImg[2]}" alt="">
    </div>
    `
}


function getEvoStatsForOneEvolutionHTML() {
    return /*html*/`
    <div class="evo-container d-flex-all-center">
        <img src=${currentPokemon.evolution.evoImg[0]} alt="">
        <div class="arrow-container">
            <img src="icons/arrow_right.svg" alt="">
            <p>Level ${currentPokemon.evolution.evoLevel[0]}</p>
        </div>
        <img src="${currentPokemon.evolution.evoImg[1]}" alt="">
    </div>
    `
}


function getMoveTableHTML() {
    return /*html*/`
    <div class="d-flex-all-center">
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
            <td class="ta-start">${move}</td>
            <td>${level}</td>
        </tr>
    `
}