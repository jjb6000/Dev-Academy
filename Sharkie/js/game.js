let canvas = document.getElementById('canvas');
let world;


function initGame() {
    world = new World(canvas)
}


// ANCHOR Eventlisteners

window.onload = () => initGame();