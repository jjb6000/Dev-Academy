let canvas = document.getElementById('canvas');
let world;


function initGame() {
    world = new World(canvas, level1);

}



// ANCHOR Eventlisteners
window.onload = () => initGame();

window.onkeydown = (e) => {
    world.keyboard.processKeyInput(e, true);
    world.keyboard.checkDevMode(e);
}

window.onkeyup = (e) => world.keyboard.processKeyInput(e, false);

