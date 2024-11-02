let canvas = document.getElementById('canvas');
let world;
let menu;
let level;
let character;
let keyboard;



// function initMenu() {
//     resetInstances();
//     applyMenuEventListeners()
// }

function loading() {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '24px Luckiest Guy';
    ctx.fillStyle = 'darkblue';
    ctx.fillText('Loading', 300, 240);
    resetInstances();
    initGame();
    
}


function initMenu() {
    menu = MENU();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    world = new World(canvas, level, character, menu, keyboard);
    applyGameEventListeners();
}





function handleClick(e) {
    if (e.target.id !== 'canvas') {
        return
    }
    if (world && world.status === 'startMenu') {
        menuActions(e);
    }
    if (world && world.status === 'gameOver') {
        console.log('go action');
        gameOverScreenActions(e);
    }
}


function menuActions(e) {
    if (isClickOnStart(e.offsetX, e.offsetY)) {
        startGame();
    }
}

function gameOverScreenActions(e) {
    if (isClickOnStart(e.offsetX, e.offsetY)) {
        reStartGame();
    }
    if (isClickOnBackToMenu(e.offsetX, e.offsetY)) {
        resetInstances();
        initMenu();
    };
}



function isClickOnStart(x, y) {
    return x < 500 && x > 220 && y < 380 && y > 300
}


function isClickOnBackToMenu(x, y) {
    return x < 440 && x > 280 && y < 440 && y > 420
}


function startGame() {
    world.status = 'game';
    menu.forEach(menuArray => {
        menuArray.forEach(o => {
            if (o instanceof MovableObject) {
                o.stop()
            }
            o.readyForGarbageCollection = true;
        })
    });
    world.menu = null;
}


function reStartGame() {
    resetInstances();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    menu = null;
    world = new World(canvas, level, character, menu, keyboard);
    world.status = 'game';
}


function nextLevel() {
    // TODO
}


function resetInstances() {
    world.keyboard = null;
    world.level = null;
    world.character = null;
    world = null;
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
window.addEventListener('click', (e) => handleClick(e));



