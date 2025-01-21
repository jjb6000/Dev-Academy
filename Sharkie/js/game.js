const canvas = document.getElementById('canvas');
const instructionsMenu = document.getElementById('instructions');
const gameOverBtns = document.getElementById('gameOverBtnDiv');
const startBtns = document.getElementById('btnDiv');
const endContainer = document.getElementById('endContainer');
const gameState = {
    game: 'game', 
    gameOver: 'gameOver', 
    startMenu: 'startMenu', 
    ready4NextLvl: 'readyForNextLevel', 
    initNextLevel: 'initNextLevel',
    end: 'end'
}
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


function initMenu() {
    hideAllOverlays()
    menu = MENU();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    world = new World(canvas, gameState.startMenu, level, character, menu, keyboard);
    applyGameEventListeners();
}


function handleClick(e) {
    if (e.target.id !== 'canvas' || !world || !world.status && world.status === 'game') {
        return
    }
    if (world.status === gameState.startMenu) {
        menuActions(e);
    }
    if (world.status === 'gameOver') {
        gameOverScreenActions(e);
    }

}


function startGame() {
    hideAllOverlays();
    menu.forEach(menuArray => {
        menuArray.forEach(o => {
            if (o instanceof MovableObject) o.stop();
        })
    });
    world.status = gameState.game;
    world.menu = null;
}


function reStartGame() {
    hideAllOverlays();
    resetInstances();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    menu = null;
    world = new World(canvas, gameState.game, level, character, menu, keyboard);
}


function nextLevel() {
    const currentLevel = level.currentLevel;
    resetInstances();
    level = getNextLevel(currentLevel + 1);
    character = new Character();
    keyboard = new Keyboard();
    world = new World(canvas, gameState.initNextLevel, level, character, menu, keyboard);
    setTimeout(() => {
        world.status = gameState.game
        world.ctx.font = '24px Luckiest Guy';
        world.ctx.fillStyle = 'darkblue';
    }, 2000);
}


function getNextLevel(levelCounter) {
    if (levelCounter === 2) {
        return level2();
    }
    if (levelCounter === 3) {
        return level3();
    }
}


function endScreen(coins) {
    resetInstances();
    setNewHighscore(coins);
    const highscore = getHighscores();
    endContainer.style.display = 'flex';
    endContainer.innerHTML = getSuccessScreen();
    displayHighscore(highscore);
    document.getElementById('canvasContainer').style.display = 'none';
}


function displayHighscore(highscore) {
    highscore.forEach(hs => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(hs));
        document.getElementById('hsList').appendChild(li);
    });
}


function backToMenu() {
    hideAllOverlays();
    resetInstances();
    initMenu();
}


function hideAllOverlays() {
    gameOverBtns.style.display = 'none';
    endContainer.style.display = 'none';
    startBtns.style.display = 'none';
    document.getElementById('canvasContainer').style.display = 'block';
}


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



window.onload = () => initMenu();


document.getElementById('menuCloseBtn').addEventListener('click', () => {
    instructionsMenu.style.display = 'none';
});


document.getElementById('startBtn').addEventListener('click', () => startGame());


document.getElementById('instBtn').addEventListener('click', () => instructionsMenu.style.display = 'flex');


document.getElementById('againBtn').addEventListener('click', () => reStartGame());


document.getElementById('backToMenuBtn').addEventListener('click', () => backToMenu());



