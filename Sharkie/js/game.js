let canvas = document.getElementById('canvas');
let world;
const keyFunctionObject = {
    'ArrowUp': () => world.character.moveUp(),
    'ArrowDown': () => world.character.moveDown(),
    'ArrowRight': () => world.character.moveRight(),
    'ArrowLeft': () => world.character.moveLeft(),
}


function initGame() {
    world = new World(canvas)
}


function processKeyInput(e) {
    console.log(e.key);
    if (keyFunctionObject[e.key]) {
        keyFunctionObject[e.key]();
    }
}


// ANCHOR Eventlisteners
window.onload = () => initGame();

window.onkeydown = (e) => processKeyInput(e);