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
let globalImageCounter = 0;




/**
 * Ruft `resetInstances` und `initGame` auf, um das Spiel zu initialisieren.
 */
function loading() {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '24px Luckiest Guy';
    ctx.fillStyle = 'darkblue';
    ctx.fillText('Loading', 300, 240);
    resetInstances();
    initGame();
}


/**
 * Initialisiert das Spiel, indem das Startmenü gesetzt wird,
 * ein neues Charakter- und Keyboard-Objekt erstellt und die Welt gestartet wird.
 */
function initGame() {
    gameController.setStartMenu();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    createNewWorld();
    world.startDraw();
}


/**
 * Startet das Spiel, indem der Spielstatus gesetzt, Event-Listener angewendet und die Welt gestartet wird.
 */
function startGame() {
    gameController.setGameStatus('game');
    applyGameEventListeners();
    world.startDraw();
}


/**
 * Setzt das Spiel zurück, indem Instanzen gelöscht, ein neues Charakter- und Keyboard-Objekt erstellt
 * und das Spiel neu gestartet wird.
 */
function reStartGame() {
    console.log('restart');

    resetInstances();
    character = new Character();
    keyboard = new Keyboard();
    level = level1();
    gameController.setGameStatus('game');
    createNewWorld();
    world.startDraw();
}


/**
 * Erstellt eine neue Welt, setzt die Welt und übergibt sie an den Spielcontroller.
 */
function createNewWorld() {
    world = new World(canvas, gameController, level, character, keyboard);
    gameController.setWorld(world);
}


/**
 * Zeigt die Highscores in einer Liste an.
 * 
 * @param {Array} highscore - Liste der Highscores, die angezeigt werden sollen.
 */
function displayHighscore(highscore) {
    highscore.forEach((hs, index) => {
        const li = getListItem(index + 1, hs)
        document.getElementById('hsList').innerHTML += li;
    });
}


/**
 * Setzt das Spiel zurück und kehrt zum Hauptmenü zurück.
 */
function backToMenu() {
    world.stopWorld();
    resetInstances();
    initGame();
}


/**
 * Setzt die Spiel-Instanzen zurück, indem die Welt und deren Objekte auf null gesetzt werden.
 */
function resetInstances() {
    if (world) {
        world.keyboard = null;
        world.level = null;
        world.character = null;
        world = null;
    }
}


/**
 * Schaltet die Soundeinstellungen des Spiels um.
 * Wenn die Sounds an sind, werden sie ausgeschaltet, andernfalls werden sie eingeschaltet.
 */
function soundSettings() {
    gameController.sounds ? soundOff() : soundOn();
}


/**
 * Schaltet die Sounds aus.
 * Aktualisiert die Anzeige des Sound-Buttons und das Checkbox-Icon.
 */
function soundOff() {
    gameController.setGameMute();
    soundsCheckbox.src = './img/menu/Key/check_box_y.svg';
    document.getElementById('gameSoundBtn').src = 'img/menu/Key/volume_off.svg';
}


/**
 * Schaltet die Sounds ein.
 * Aktualisiert die Anzeige des Sound-Buttons und das Checkbox-Icon.
 */
function soundOn() {
    gameController.setGameSounds();
    soundsCheckbox.src = './img/menu/Key/select_check_box_y.svg';
    document.getElementById('gameSoundBtn').src = 'img/menu/Key/volume_on.svg';
}


/**
 * Schaltet den Vollbildmodus ein oder aus.
 */
function fullscreenSetting() {
    gameController.fullScreen ? fullScreenOff() : fullScreenOn();
}


/**
 * Deaktiviert den Vollbildmodus und setzt die Anzeige zurück.
 */
function fullScreenOff() {
    gameController.setWindowScreen();
    fullscreenCheckbox.src = './img/menu/Key/check_box_y.svg';
    document.getElementById('gameFullscreenBtn').src = 'img/menu/Key/fullscreen_y.svg';
    canvas.classList.remove('canvas-fs');
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}


/**
 * Aktiviert den Vollbildmodus und ändert die Anzeige der Buttons.
 */
function fullScreenOn() {
    gameController.setFullScreen();
    fullscreenCheckbox.src = './img/menu/Key/select_check_box_y.svg';
    document.getElementById('gameFullscreenBtn').src = 'img/menu/Key/exit_fullscreen_y.svg';
    canvas.classList.add('canvas-fs');
    canvasContainer.requestFullscreen();
}


/**
 * Öffnet das Einstellungsmenü und zeigt die aktuellen Optionen an.
 */
function openSettingsMenu() {
    const checkbox = './img/menu/Key/check_box_y.svg';
    const checkboxChecked = './img/menu/Key/select_check_box_y.svg';
    settingsMenu.style.display = 'flex';
    gameController.fullScreen ? fullscreenCheckbox.src = checkboxChecked : fullscreenCheckbox.src = checkbox;
    gameController.sounds ? soundsCheckbox.src = checkboxChecked : soundsCheckbox.src = checkbox;
}


/**
 * Wendet die Event-Listener für die Tasteneingaben und Touch-Buttons im Spiel an.
 */
function applyGameEventListeners() {
    window.onkeydown = (e) => world.keyboard.processKeyInput(e.key, true);
    window.onkeyup = (e) => world.keyboard.processKeyInput(e.key, false);
    const touchBtnIds = ['tLeft', 'tRight', 'tSlap', 'tBubble', 'tPoison', 'tUp', 'tDown'];
    touchBtnIds.forEach(id => {
        const btn = document.getElementById(id);
        btn.addEventListener('touchstart', () => world.keyboard.processKeyInput(btn.dataset.key, true));
        btn.addEventListener('touchend', () => world.keyboard.processKeyInput(btn.dataset.key, false));
    });
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


/**
* EventListener falls Fullscreen mit Escape-Taste beendet wurde.
* Aktualisiert UI entsprechend
*/
document.addEventListener('fullscreenchange', () => {
    if (world.gameController.fullScreen && document.fullscreenElement === null) {
        fullScreenOff();
    }
})










