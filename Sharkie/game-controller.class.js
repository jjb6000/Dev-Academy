class GameController {
    fullScreen;
    sounds;
    gameStates = ['game', 'gameOver', 'startMenu', 'initNextLvl', 'startNextLvl','end'];
    gameStatus;
    currentLevel;
    nextLevel;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    gameOverImg = new GameOver();
    defaultBg = new Background('../Sharkie/img/bg/Dark/1.png', 0);
    menu
    menuAnimation
    


    constructor(status = 'startMenu', fullScreen = false, sounds = true, currentLevel = 1) {
        this.gameStatus = status;
        this.fullScreen = fullScreen;
        this.sounds = sounds;
        this.currentLevel = currentLevel;
        this.nextLevel = +currentLevel + +1;
        this.canvas = document.getElementById('canvas');
        this.menu = MENU();
        this.checkForStatusAction();
    }


    setGameStatus(newStatus) {
        if (this.gameStates.indexOf(newStatus) > -1) {
            this.gameStatus = newStatus;
            this.checkForStatusAction();
        } else {
            console.error('invalid game status')
        }
    }


    checkForStatusAction() {
        if (!this.isInGameStatus()) {
            console.log(this.gameStatus)
            if (this.isInStartMenu()) {
                startBtns.style.display = 'flex';
                this.drawStartMenu();
            } else {
                startBtns.style.display = 'none';
            }
            if (this.isGameOver()) this.getGameOverScreen();
            if (this.initNextLvl()) this.getBetweenLevelsScreen();
        }

    }


    drawStartMenu() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.menu.forEach(array => array.forEach(mO => this.addToMap(mO))); 
        if (!this.isInStartMenu()) {
            cancelAnimationFrame(this.menuAnimation)
        }
        this.menuAnimation = requestAnimationFrame(() => {
            if (this.isInStartMenu()) {
                this.drawStartMenu();
            }
        });
    }


    endMenu() {
        cancelAnimationFrame(this.menuAnimation)
        menu.forEach(menuArray => {
            menuArray.forEach(o => {
                if (o instanceof MovableObject) o.stop();
            })
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    getGameOverScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.defaultBg);
        this.addToMap(this.gameOverImg);
        if (!this.gOBtnSwitch) {
            gameOverBtns.style.display = 'flex';
            this.gOBtnSwitch = true;
        }
    }


    getBetweenLevelsScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.defaultBg);
        this.ctx.font = '80px Luckiest Guy';
        this.ctx.fillStyle = 'yellow';
        this.writeOnCanvas('Level ' + this.nextLevel, 240, 160);
    }

    writeOnCanvas(text, x, y) {
        this.ctx.fillText(text, x, y)
    }


    addToMap(movableObject) {
        movableObject.draw(this.ctx);
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


    startNextLvl() {
        return this.gameStatus === 'startNextLvl';
    }


    endGame() {
        return this.gameStatus === 'end';
    }

}