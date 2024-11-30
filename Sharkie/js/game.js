const canvas = document.getElementById('canvas');
const instructionsMenu = document.getElementById('instructions');
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
    world = new World(canvas, 'startMenu', level, character, menu, keyboard);
    applyGameEventListeners();
}


function handleClick(e) {    
    if (e.target.id !== 'canvas' || !world || !world.status && world.status === 'game') {
        return
    }
    console.log(e.offsetX, e.offsetY);
    if (world.status === 'startMenu') {
        menuActions(e);
    }
    if (world.status === 'gameOver') {
        console.log('go action');
        gameOverScreenActions(e);
    }

}


function menuActions(e) {
    if (isClickOnStart(e.offsetX, e.offsetY) && instructionsMenu.style.display === 'none') {
        startGame();
    }
    if (isClickOnInstructions(e.offsetX, e.offsetY) && instructionsMenu.style.display === 'none') {
        instructionsMenu.style.display = 'flex'
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


function isClickOnInstructions(x, y) {
    return x < 500 && x > 220 && y < 200 && y > 118
}



function isClickOnBackToMenu(x, y) {
    return x < 440 && x > 280 && y < 440 && y > 420
}


function startGame() {
    world.status = 'game';
    menu.forEach(menuArray => {
        menuArray.forEach(o => {
            if (o instanceof MovableObject) o.stop();
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
    world = new World(canvas, 'game', level, character, menu, keyboard);
}


function nextLevel() {
    resetInstances();
    level = level2();
    character = new Character();
    keyboard = new Keyboard();
    
    world = new World(canvas, 'game', level, character, menu, keyboard);
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

document.getElementById('menuCloseBtn').addEventListener('click', () => {
    instructionsMenu.style.display = 'none';
})



