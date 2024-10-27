let canvas = document.getElementById('canvas');
let world;
let menu;
let level; 
let character;
let keyboard;


function initMenu() {
    menu = new Menu(canvas, MENU);
    applyMenuEventListeners()
}


function initGame() {
    resetInstances();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    world = new World(canvas, level, character, keyboard);
    applyGameEventListeners();
}


function reStart(world) {
    console.log(world);
    
    if (world) {
        console.log('Welt da');
        
        world = null;
    }
    console.log(world);
    
    initGame()
}


function initGameOver() {
    applyGameOverScreenEventListeners();

}


function resetInstances() {   
    level = null;
    world = null;
    menu = null;
    character = null;
    keyboard = null;
    // debugger
}



// ANCHOR Eventlisteners
function applyGameEventListeners() {
    window.onkeydown = (e) => {
        world.keyboard.processKeyInput(e, true);
        world.keyboard.checkDevMode(e);
    }
    
    window.onkeyup = (e) => world.keyboard.processKeyInput(e, false); 
}


function applyMenuEventListeners() {
    this.canvas.addEventListener('click', (e) => handleClickOnMenu(e))
}


function handleClickOnMenu(e) {
    console.log('x:', e.offsetX, 'y:', e.offsetY);
    if (isClickOnStart(e.offsetX, e.offsetY)) initGame();
}


function applyGameOverScreenEventListeners() {
        
    this.canvas.removeEventListener('click', (e) => handleClickOnMenu(e));
}


function isClickOnStart(x, y) {
    return x < 500 && x > 220 && y < 380 && y > 300 
}


function isClickOnTryAgainBtn(x, y) {
    return x < 500 && x > 220 && y < 380 && y > 300
}


window.onload = () => initMenu();



  