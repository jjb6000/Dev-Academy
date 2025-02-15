const canvas = document.getElementById('canvas');
const instructionsMenu = document.getElementById('instructions');
const settingsMenu = document.getElementById('settings');
const gameOverBtns = document.getElementById('gameOverBtnDiv');
const startBtns = document.getElementById('btnDiv');
const endContainer = document.getElementById('endContainer');
const gameController = new GameController(gameOverBtns, startBtns, endContainer);
const canvasContainer = document.getElementById('canvasContainer');
const soundsCheckbox = document.getElementById('soundsCB');
const fullscreenCheckbox = document.getElementById('fullscreenCB');
let world;
let menu;
let level;
let character;
let keyboard;
let coinScore = 0;




function loading() {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '24px Luckiest Guy';
    ctx.fillStyle = 'darkblue';
    ctx.fillText('Loading', 300, 240);
    resetInstances();
    initGame();
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
    console.log('restart');

    resetInstances();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    gameController.setGameStatus('game');
    world = new World(canvas, gameController, level, character, keyboard);
    world.startDraw()
}


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



function resetInstances() {
    if (world) {
        world.keyboard = null;
        world.level = null;
        world.character = null;
        world = null;
    }
}


function soundSettings() {
    gameController.sounds ? soundOff() : soundOn();
}


function soundOff() {
    gameController.setGameMute();
    soundsCheckbox.src = './img/menu/Key/check_box_y.svg';
    document.getElementById('gameSoundBtn').src = 'img/menu/Key/volume_on.svg';
}


function soundOn() {
    gameController.setGameSounds();
    soundsCheckbox.src = './img/menu/Key/select_check_box_y.svg';
    document.getElementById('gameSoundBtn').src = 'img/menu/Key/volume_off.svg';
}


function fullscreenSetting() {
    gameController.fullScreen ? fullScreenOff() : fullScreenOn();
}


function fullScreenOff() {
    gameController.setWindowScreen();
    fullscreenCheckbox.src = './img/menu/Key/check_box_y.svg';
    document.getElementById('gameFullscreenBtn').src = 'img/menu/Key/fullscreen_y.svg';
    canvas.classList.remove('canvas-fs');
    document.exitFullscreen();
}


function fullScreenOn() {
    gameController.setFullScreen();
    fullscreenCheckbox.src = './img/menu/Key/select_check_box_y.svg';
    document.getElementById('gameFullscreenBtn').src = 'img/menu/Key/exit_fullscreen_y.svg';
    canvas.classList.add('canvas-fs');
    canvasContainer.requestFullscreen();
}




function openSettingsMenu() {
    const checkbox = './img/menu/Key/check_box_y.svg';
    const checkboxChecked = './img/menu/Key/select_check_box_y.svg';
    settingsMenu.style.display = 'flex';
    gameController.fullScreen ? fullscreenCheckbox.src = checkboxChecked : fullscreenCheckbox.src = checkbox;
    gameController.sounds ? soundsCheckbox.src = checkboxChecked : soundsCheckbox.src = checkbox;
}





// ANCHOR Eventlisteners
function applyGameEventListeners() {
    window.onkeydown = (e) => {
        world.keyboard.processKeyInput(e.key, true);
        world.keyboard.checkDevMode(e.key);
    }
    window.onkeyup = (e) => world.keyboard.processKeyInput(e.key, false);

    const touchBtnIds = ['tLeft', 'tRight', 'tSlap', 'tBubble', 'tPoison', 'tUp', 'tDown']

    touchBtnIds.forEach(id => {
        const btn = document.getElementById(id);
        btn.addEventListener('touchstart', () => world.keyboard.processKeyInput(btn.dataset.key, true));
        btn.addEventListener('touchend', () => world.keyboard.processKeyInput(btn.dataset.key, false));
    })
}



window.onload = () => initGame();


document.getElementById('instBtn').addEventListener('click', () => instructionsMenu.style.display = 'flex');


document.getElementById('menuCloseBtn').addEventListener('click', () => instructionsMenu.style.display = 'none');


document.getElementById('settingsBtn').addEventListener('click', () => openSettingsMenu());


document.getElementById('settingsCloseBtn').addEventListener('click', () => settingsMenu.style.display = 'none');


document.getElementById('startBtn').addEventListener('click', () => startGame());


document.getElementById('soundsCB').addEventListener('click', () => soundSettings());


document.getElementById('fullscreenCB').addEventListener('click', () => fullscreenSetting());


document.getElementById('againBtn').addEventListener('click', () => reStartGame());


document.getElementById('backToMenuBtn').addEventListener('click', () => backToMenu());










