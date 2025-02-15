class GameController {
    fullScreen;
    sounds;
    gameStates = ['game', 'gameOver', 'startMenu', 'initNextLvl', 'end'];
    gameStatus;
    currentLevel;
    btnHtmlElements;
    world;
    tempCoinScore;
    swim_sound = new Audio('../Sharkie/audio/move.mp3');
    bg_sound = new Audio('../Sharkie/audio/shark-bg-sound.mp3');
    whale_sound = new Audio('../Sharkie/audio/whale.mp3')


    constructor(gameOverBtns, startBtns, endContainer) {
        this.gameStatus = 'startMenu';
        this.fullScreen = false;
        this.sounds = false;
        this.currentLevel = 1;
        this.btnHtmlElements = {
            'gameOver': gameOverBtns,
            'startMenu': startBtns,
            'end': endContainer,
        };
    }


    setGameStatus() {
        this.gameStatus = 'game';
        this.statusActions();
    }


    setInitNxtLvl() {
        this.gameStatus = 'initNextLvl';
        this.statusActions();
    }


    setGameOver() {
        this.currentLevel = 1;
        this.gameStatus = 'gameOver';
        this.statusActions();
    }


    setEnd() {
        this.gameStatus = 'end';
        this.statusActions();
    }


    setStartMenu() {
        this.gameStatus = 'startMenu';
        this.statusActions();
    }


    statusActions() {
        this.resetAllElements();
        if (this.btnHtmlElements[this.gameStatus] !== undefined) {
            this.btnHtmlElements[this.gameStatus].style.display = 'flex';
        }
        if (this.endGame()) {
            this.displaySuccessScreen()
        }
    }


    displaySuccessScreen() {
        setNewHighscore(this.tempCoinScore);
        const highscore = getHighscores();
        this.btnHtmlElements['end'].innerHTML = getSuccessScreen();
        displayHighscore(highscore);
        document.getElementById('canvasContainer').style.display = 'none';
        this.currentLevel = 1;
    }


    getNextLevel() {
        const nextLvl = +this.currentLevel + 1
        if (nextLvl === 2) {
            this.currentLevel = 2;
            return level2();
        }
        if (nextLvl === 3) {
            this.currentLevel = 3;
            return level3();
        }
    }


    resetAllElements() {
        gameOverBtns.style.display = 'none';
        endContainer.style.display = 'none';
        startBtns.style.display = 'none';
    }


    playSwimSound() {
        if(this.sounds) this.swim_sound.play()
    }


    pauseSwimSound() {
        if(this.sounds) this.swim_sound.pause()
    }


    playBgSound() {
        if(this.sounds) this.bg_sound.play()
    }


    pauseBgSound() {
        if(this.sounds) this.bg_sound.pause()
    }


    playWhaleSound() {
        if(this.sounds) this.whale_sound.play()
    }


    pauseWhaleSound() {
        if(this.sounds) this.whale_sound.pause()
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


    setGameSounds() {
        this.sounds = true;
        this.playBgSound();
    }


    setGameMute() {
        this.sounds = false;
        this.endAllSounds();
    }


    endAllSounds() {
        this.swim_sound.pause();
        this.bg_sound.pause();
        this.pauseWhaleSound()
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

}