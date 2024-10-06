let canvas = document.getElementById('canvas');
let world;


function initMenu() {
    new Menu(canvas, MENU);
}


function initGame() {
    world = new World(canvas, level1);
    applyGameEventListeners();
}



// ANCHOR Eventlisteners
function applyGameEventListeners() {
    window.onkeydown = (e) => {
        world.keyboard.processKeyInput(e, true);
        world.keyboard.checkDevMode(e);
    }
    
    window.onkeyup = (e) => world.keyboard.processKeyInput(e, false); 
}

window.onload = () => initMenu();



