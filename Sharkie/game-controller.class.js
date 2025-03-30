class GameController {
    world
    fullScreen;
    sounds;
    gameStates = ['game', 'gameOver', 'startMenu', 'initNextLvl', 'end'];
    gameStatus;
    currentLevel;
    btnHtmlElements;
    tempCoinScore;
    initialBGLoadCounter = 0;
    DOMLoaded = false;
    swim_sound = new Audio('../Sharkie/audio/move.mp3');
    bg_sound = new Audio('../Sharkie/audio/shark-bg-sound.mp3');
    whale_sound = new Audio('../Sharkie/audio/whale.mp3');


    constructor(gameOverBtns, startBtns, endContainer) {
        this.gameStatus = 'startMenu';
        this.fullScreen = false;
        this.currentLevel = 1;
        this.btnHtmlElements = {
            'gameOver': gameOverBtns,
            'startMenu': startBtns,
            'end': endContainer,
        };
        this.checkForPrevSoundSetting();
    }


    /**
    * Überprüft, ob game.html direkt aufegrufen wurde. In dem Fall muss eine Nutzerinteraktion fürs autoplay erfolgen.
    * Überprüft den localStorage, ob eine Soundeinstellung vorhanden ist.
    * Falls ja, wird diese verwendet andernfalls ist die default-Einstellung mute.
    */
    checkForPrevSoundSetting(interaction = false) {
        if(document.referrer.endsWith('Sharkie/index.html') || interaction) {
            const soundLocal = JSON.parse(localStorage.getItem('sharkie-sound'));
            soundLocal ? this.setGameSounds() : this.setGameMute();
        } else {
            document.addEventListener('click', () => this.secondSoundCheck())
        }
    }
  
    
    /**
    * Überprüft den localStorage (nach Nutzer-Interaktion), ob eine Soundeinstellung vorhanden ist.
    * Entfernt den eventlistener
    */
    secondSoundCheck() {
        this.checkForPrevSoundSetting(true);
        document.removeEventListener('click', () => this.secondSoundCheck());
    }


    /**
     * Überprüft den Status eines beweglichen Objekts und aktualisiert das Spiel entsprechend.
     * @param {Object} mO - Das zu überprüfende bewegliche Objekt.
     */
    statusTriggerCheck(mO) {
        if (mO instanceof Whale && mO.whaleGone && this.currentLevel < 3) {
            this.setInitNxtLvl();
        }
        if (mO instanceof Character && mO.gameOver) {
            this.setGameOver();
        }
        if (mO instanceof Whale && mO.whaleGone && this.currentLevel === 3) {
            this.setEnd();
        }
        if (mO instanceof Whale) {
            if (mO.objectIsOnScreen(mO.x)) this.playWhaleSound();
        }
    }


    /**
    * Überprüft, ob Hintergrund-Elemente geladen wurden und shaltet den LoadScreen ab.
    * @param {Object} mO - Das zu überprüfende bewegliche Objekt.
    */
    loadScreenCheck(mo) {
        if (this.initialBGLoadCounter > 299) return;
        if (mo instanceof MovableObject && mo.img.complete && this.initialBGLoadCounter < 300 && this.DOMLoaded) {
            this.initialBGLoadCounter++
        }
        if (this.initialBGLoadCounter >= 299) {
            this.setLoadScreen(false);
        }        
    }


    /**
     * Prüft, ob ein bewegliches Objekt zur Müllsammlung bereit ist oder ob es im Game-Over-Zustand entfernt werden soll.
     * Damit wird sichergestellt, dass alle Animationen beendet sind oder beendet werden. Sonst könnten alte Instanzen aufgrund laufender Animationen nicht gelöscht werden.
     * @param {Object} movableObject - Das zu überprüfende bewegliche Objekt.
     */
    checkForGarbage(movableObject) {
        if (movableObject.readyForGarbageCollection && this.gameStatus !== 'startMenu') {
            this.removeItem(movableObject);
        }
        if (this.isGameOver() &&
            movableObject instanceof MovableObject &&
            !(movableObject instanceof Background)) {
            movableObject.stop();
            this.removeItem(movableObject);
        }
    }


    /**
     * Entfernt ein Objekt aus der entsprechenden Level-Sammlung.
     * @param {Object} item - Das zu entfernende Objekt.
     */
    removeItem(item) {
        if (item instanceof Bubble || item instanceof Coin || item instanceof Poison) {
            this.world.level.collectables.splice(this.world.level.collectables.indexOf(item), 1);
        }
        if (item instanceof AttackBubble) {
            this.world.level.firedBubbles.splice(this.world.level.firedBubbles.indexOf(item), 1);
        }
        if (item instanceof Jellyfish || item instanceof Pufferfish || item instanceof Whale) {
            this.world.level.enemies.splice(this.world.level.enemies.indexOf(item), 1);
        }
    }


    /**
     * Setzt den Spielstatus auf "game" und aktualisiert die UI entsprechend.
     */
    setGameStatus() {
        this.gameStatus = 'game';
        this.statusActions();
    }


    /**
     * Setzt den Spielstatus auf "initNextLvl" und aktualisiert die UI,
     * um das nächste Level vorzubereiten.
     */
    setInitNxtLvl() {
        this.gameStatus = 'initNextLvl';
        this.statusActions();
    }


    /**
     * Setzt den Spielstatus auf "gameOver", setzt das Level zurück
     * und aktualisiert die UI.
     */
    setGameOver() {
        this.currentLevel = 1;
        this.gameStatus = 'gameOver';
        this.statusActions();
    }


    /**
     * Setzt den Spielstatus auf "end" und aktualisiert die UI.
     */
    setEnd() {
        this.gameStatus = 'end';
        this.statusActions();
    }


    /**
     * Setzt den Spielstatus auf "startMenu" und zeigt das Startmenü an.
     */
    setStartMenu() {
        this.gameStatus = 'startMenu';
        this.statusActions();
    }


    /**
    * Setzt die aktuelle Welt des Spiels.
    * @param {Object} world - Das Welt-Objekt, das für das Spiel verwendet wird.
    */
    setWorld(world) {
        this.world = world;
    }

    /**
    * Startet und beendet den Lade-Screen.
    */
    setLoadScreen(trigger) { 
        if (trigger) {
            document.getElementById('loaderBg').style.display = 'flex';
        } else {
            document.getElementById('loaderBg').style.display = 'none';   
        }
    }


    /**
    * Aktualisiert die Spielstatus-abhängigen UI-Elemente.
    * Blendet relevante Buttons ein und überprüft, ob das Spiel beendet ist.
    */
    statusActions() {
        this.resetAllElements();
        if (this.btnHtmlElements[this.gameStatus] !== undefined) {
            this.btnHtmlElements[this.gameStatus].style.display = 'flex';
        }
        if (this.isInStartMenu()) {
            this.setLoadScreen(true);
        }
        if (this.endGame()) {
            this.displaySuccessScreen();
        }
    }


    /**
     * Zeigt den Erfolgsbildschirm an, speichert den neuen Highscore
     * und blendet das Spielfeld aus.
     */
    displaySuccessScreen() {
        setNewHighscore(this.tempCoinScore);
        const highscore = getHighscores();
        this.btnHtmlElements['end'].innerHTML = getSuccessScreen();
        displayHighscore(highscore);
        document.getElementById('canvasContainer').style.display = 'none';
        this.currentLevel = 1;
    }


    /**
     * Lädt das nächste Level basierend auf dem aktuellen Fortschritt.
     * @returns {void | Object} Gibt das nächste Level-Objekt zurück, falls vorhanden.
     */
    getNextLevel() {
        const nextLvl = +this.currentLevel + 1;
        if (nextLvl === 2) {
            this.currentLevel = 2;
            return level2();
        }
        if (nextLvl === 3) {
            this.currentLevel = 3;
            return level3();
        }
    }


    /**
     * Setzt alle UI-Elemente zurück und versteckt die relevanten Buttons.
     */
    resetAllElements() {
        gameOverBtns.style.display = 'none';
        endContainer.style.display = 'none';
        startBtns.style.display = 'none';
    }


    playSwimSound() {
        if (this.sounds) this.swim_sound.play()
    }


    pauseSwimSound() {
        if (this.sounds) this.swim_sound.pause()
    }


    playBgSound() {
        if (this.sounds) this.bg_sound.play()
    }


    pauseBgSound() {
        if (this.sounds) this.bg_sound.pause()
    }


    playWhaleSound() {
        if (this.sounds) this.whale_sound.play()
    }


    pauseWhaleSound() {
        if (this.sounds) this.whale_sound.pause()
    }


    setTempCoinScore(number) {
        this.tempCoinScore = number;
    }


    setFullScreen() {
        this.fullScreen = true;
    }


    setWindowScreen() {
        this.fullScreen = false;
    }


    /**
     * Aktiviert die Spiel-Sounds und startet die Hintergrundmusik.
     */
    setGameSounds() {
        this.sounds = true;
        localStorage.setItem('sharkie-sound', JSON.stringify(true));
        soundsCheckbox.src = './img/menu/Key/select_check_box_y.svg';
        document.getElementById('gameSoundBtn').src = 'img/menu/Key/volume_on.svg';
        this.playBgSound();
    }

    /**
     * Schaltet alle Spiel-Sounds stumm und stoppt alle aktuell abgespielten Sounds.
     */
    setGameMute() {
        this.sounds = false;
        localStorage.setItem('sharkie-sound', JSON.stringify(false));
        soundsCheckbox.src = './img/menu/Key/check_box_y.svg';
        document.getElementById('gameSoundBtn').src = 'img/menu/Key/volume_off.svg';
        this.endAllSounds();
    }

    /**
     * Beendet alle aktuell laufenden Sounds im Spiel.
     */
    endAllSounds() {
        this.swim_sound.pause();
        this.bg_sound.pause();
        this.whale_sound.pause();
    }


    isInGameStatus() {
        return this.gameStatus === 'game';
    }


    isGameOver() {
        return this.gameStatus === 'gameOver';
    }

    isInStartMenu() {
        return this.gameStatus === 'startMenu';
    }


    initNextLvl() {
        return this.gameStatus === 'initNextLvl';
    }


    endGame() {
        return this.gameStatus === 'end';
    }


    /**
    * Ein cheat der über die Konsole über "gameController.cheat()" aufgerufen werden kann. Der Endgegner wird damit initialisiert und direkt getötet.
    */
    cheat() {
        this.world.level.enemies.forEach(item => {
            if (item instanceof Whale) {
                item.ownDamage = 2000;
                item.x = this.world.character.x + 200
            }
        });
    }

}