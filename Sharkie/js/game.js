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
    let action = keyFunctionObject[e.key]
    if (action) {
        action();
    }
}


// ANCHOR Eventlisteners
window.onload = () => initGame();

window.onkeydown = (e) => processKeyInput(e);