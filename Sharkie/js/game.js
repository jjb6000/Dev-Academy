let canvas = document.getElementById('canvas');
let world;
let keyboard = new Keyboard();



function initGame() {
    world = new World(canvas)
}





// ANCHOR Eventlisteners
window.onload = () => initGame();

window.onkeydown = (e) => keyboard.processKeyInput(e);

window.onkeyup = () => world.character.stopMoving();