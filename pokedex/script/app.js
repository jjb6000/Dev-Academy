

function loadPokemonPage() {
    document.getElementById('titleContainer').innerHTML = loadPokemonTitleSection(
        pokemonObject['species'].name, 
        pokemonObject.id, 
        pokemonObject.sprites.front_default);
        addTypeTags(pokemonObject.types);
        loadPokeImg();
        loadAboutSpecs();
}


function addTypeTags(array) {
    for (let i = 0; i < array.length; i++) {
        document.getElementById('typeTags').innerHTML += loadTagHTML(array[i].type.name);
    }
}


function loadAboutSpecs() {
    document.getElementById('stats').innerHTML = loadAboutSpecsHTML(pokemonObject.species.name, pokemonObject.height, pokemonObject.weight)
}


function returnMultipleValuesInOneString(array, key) {
    let string
    for (let i = 0; i < array.length; i++) {
        if (i == array.length) {
            string = string + array[i].key
        } else {
            string = string + ', ' + array[i].key;
        }
        string = array[i].key;
        
    }
}


function loadPokeImg() {
    document.getElementById('pokePic').src = pokemonObject.sprites.other.dream_world.front_default
}

