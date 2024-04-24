

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