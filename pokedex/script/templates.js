

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
    <div>
        <canvas id="myChart"></canvas>
    </div>
    <div class="d-flex-start">
        <p class="standard-padding"><b>Total:</b></p>
        <p> ${total}</p>
    </div>
    `
}