class GameController {
    fullScreen;
    sounds;
    gameStates = ['game', 'gameOver', 'startMenu', 'initNextLvl', 'end'];
    gameStatus;
    currentLevel;
    nextLevel;
    btnHtmlElements;    


    constructor(gameOverBtns, startBtns, endContainer) {
        this.gameStatus = 'startMenu';
        this.fullScreen = false;
        this.sounds = true;
        this.currentLevel = 1;
        this.btnHtmlElements = {
            'gameOver': gameOverBtns,
            'startMenu': startBtns,
            'end': endContainer,
        };
    }


    setGameStatus(newStatus) {
        if (this.gameStates.indexOf(newStatus) > -1) {
            this.gameStatus = newStatus;
            this.checkHtmlDisplays()
        } else {
            console.error('invalid game status')
        }
    }


    checkHtmlDisplays() {
        this.resetAllElements();
        if (this.btnHtmlElements[this.gameStatus] !== undefined) {
            this.btnHtmlElements[this.gameStatus].style.display = 'flex';
        }        
    }


    getNextLevel() {
        const nextLvl = +this.currentLevel +1
        if (nextLvl === 2) {
            return level2();
        }
        if (nextLvl === 3) {
            return level3();
        }
    }


    resetAllElements() {
        gameOverBtns.style.display = 'none';
        endContainer.style.display = 'none';
        startBtns.style.display = 'none';
    }



    setFullScreen(truOrFalse) {
        this.fullScreen = truOrFalse
    }


    setSounds(truOrFalse) {
        this.fullScreen = truOrFalse
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