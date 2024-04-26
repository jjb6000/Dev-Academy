

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


function loadAboutSpecsHTML(spiecies, height, weight, abilities) {
    return /*html*/`
        <div class="about-stats">
                <div class="stat-key grey-font standard-padding">Spiecies</div>
                <div class="stat-value standard-padding">${spiecies}</div>
                <div class="stat-key grey-font standard-padding">Height</div>
                <div class="stat-value standard-padding">${height}</div>
                <div class="stat-key grey-font standard-padding">Weight</div>
                <div class="stat-value standard-padding">${weight}</div>
                <div class="stat-key grey-font standard-padding">Ability</div>
                <div class="stat-value standard-padding">${abilities}</div>
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