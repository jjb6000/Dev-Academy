

function loadPokemonPage() {
    document.getElementById('titleContainer').innerHTML = loadPokemonTitleSection(
        pokemonObject['species'].name, 
        pokemonObject.id, 
        pokemonObject.sprites.front_default);
        addTypeTags(pokemonObject.types);
        loadPokeImg();
}


function addTypeTags(array) {
    for (let i = 0; i < array.length; i++) {
        document.getElementById('typeTags').innerHTML += loadTagHTML(array[i].type.name);
    }
}


function loadPokeImg() {
    document.getElementById('pokePic').src = pokemonObject.sprites.other.dream_world.front_default
}

