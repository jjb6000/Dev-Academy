let canvas = document.getElementById('canvas');
let world;
let menu;
let level;
let character;
let keyboard;


function initMenu() {
    resetInstances();
    menu = new Menu(canvas, MENU);
    applyMenuEventListeners()
}

function loading() {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '24px Luckiest Guy';
    ctx.fillStyle = 'darkblue';
    ctx.fillText('Loading', 300, 240);
    resetInstances();
    setTimeout(() => {
        initGame();
    }, 2000);
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
    canvas.removeEventListener('click', (e) => handleClickOnMenu(e));
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
    canvas.addEventListener('click', (e) => handleClickOnMenu(e))
}


function handleClickOnMenu(e) {
    console.log('x:', e.offsetX, 'y:', e.offsetY);
    if (isClickOnStart(e.offsetX, e.offsetY)) loading();
}


function applyGameOverScreenEventListeners() {
    canvas.addEventListener('click', (e) => handleClickOnGameOver(e));

}

const handleClickOnGameOver = (e) => {
    if (isClickOnStart(e.offsetX, e.offsetY)) loading();

    if (isClickOnBackToMenu(e.offsetX, e.offsetY)) {
        initMenu()
    };
}


function isClickOnStart(x, y) {
    return x < 500 && x > 220 && y < 380 && y > 300
}


function isClickOnBackToMenu(x, y) {
    return x < 440 && x > 280 && y < 440 && y > 420
}


window.onload = () => initMenu();



