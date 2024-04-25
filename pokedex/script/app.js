

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
    document.getElementById('stats').innerHTML = loadAboutSpecsHTML(pokemonObject.species.name, pokemonObject.height, pokemonObject.weight, returnMultipleAbilitiesInOneString())
}


function returnMultipleAbilitiesInOneString() {
    let array = pokemonObject.abilities; 
    let string = array[0].ability.name;
    for (let i = 1; i < array.length; i++) {
        if (i == array.length) {
            string = string + array[i].ability.name;
        } else {
            string = string + ', ' + array[i].ability.name;
        }        
    }
    return string;
}


function loadPokeImg() {
    document.getElementById('pokePic').src = pokemonObject.sprites.other.dream_world.front_default
}

