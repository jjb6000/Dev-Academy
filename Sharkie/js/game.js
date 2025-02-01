const canvas = document.getElementById('canvas');
const instructionsMenu = document.getElementById('instructions');
const gameOverBtns = document.getElementById('gameOverBtnDiv');
const startBtns = document.getElementById('btnDiv');
const endContainer = document.getElementById('endContainer');
const gameController = new GameController(gameOverBtns, startBtns, endContainer)
let world;
let menu;
let level;
let character;
let keyboard;
let coinScore = 0;

window.addEventListener('load', () => {
    console.log(navigator.userAgent);
});



function loading() {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '24px Luckiest Guy';
    ctx.fillStyle = 'darkblue';
    ctx.fillText('Loading', 300, 240);
    resetInstances();
    initGame();
}


function setTempCoinScore(number) {
    coinScore = number
}


function initGame() {
    gameController.setStartMenu();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();   
    world = new World(canvas, gameController, level, character, keyboard);
    world.startDraw();
}


function startGame() {
    gameController.setGameStatus('game');
    applyGameEventListeners();
    world.startDraw();
}


function reStartGame() {
    // hideAllOverlays();
    resetInstances();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    gameController.setGameStatus('game');
    world = new World(canvas, gameController, level, character, keyboard);
}


// function nextLevel() {
//     const currentLevel = level.currentLevel;
//     resetInstances();
//     level = getNextLevel(currentLevel + 1);
//     character = new Character();
//     keyboard = new Keyboard();
//     gameController.setGameStatus('initNextLevel');
//     world = new World(canvas, gameController, level, character,  keyboard);
//     setTimeout(() => {
//         gameController.setGameStatus('game')
//         world.ctx.font = '24px Luckiest Guy';
//         world.ctx.fillStyle = 'darkblue';
//     }, 2000);
// }


// function getNextLevel(levelCounter) {
//     if (levelCounter === 2) {
//         return level2();
//     }
//     if (levelCounter === 3) {
//         return level3();
//     }
// }


// function endScreen(coins) {
//     resetInstances();
//     setNewHighscore(coins);
//     const highscore = getHighscores();
//     endContainer.style.display = 'flex';
//     endContainer.innerHTML = getSuccessScreen();
//     displayHighscore(highscore);
//     document.getElementById('canvasContainer').style.display = 'none';
// }


function displayHighscore(highscore) {
    highscore.forEach((hs, index) => {
        const li = getListItem(index + 1, hs)
        document.getElementById('hsList').innerHTML += li;
    });
}


function backToMenu() {
    world.stopWorld()
    resetInstances();
    initGame();
}


// function hideAllOverlays() {
//     gameOverBtns.style.display = 'none';
//     endContainer.style.display = 'none';
//     startBtns.style.display = 'none';
//     document.getElementById('canvasContainer').style.display = 'block';
// }


function resetInstances() {
    if (world) {
        world.keyboard = null;
        world.level = null;
        world.character = null;
        world = null;
    }
}



// ANCHOR Eventlisteners
function applyGameEventListeners() {
    window.onkeydown = (e) => {
        world.keyboard.processKeyInput(e, true);
        world.keyboard.checkDevMode(e);
    }
    window.onkeyup = (e) => world.keyboard.processKeyInput(e, false);
}



window.onload = () => initGame();


document.getElementById('menuCloseBtn').addEventListener('click', () => {
    instructionsMenu.style.display = 'none';
});


document.getElementById('startBtn').addEventListener('click', () => startGame());


document.getElementById('instBtn').addEventListener('click', () => instructionsMenu.style.display = 'flex');


document.getElementById('againBtn').addEventListener('click', () => reStartGame());


document.getElementById('backToMenuBtn').addEventListener('click', () => backToMenu());



