class Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    X_BTN = false;
    SPACE = false;
    V_BTN = false;

    keyObject = {
        'ArrowUp': this.UP,
        'ArrowDown':  this.DOWN,
        'ArrowRight': this.RIGHT,
        'ArrowLeft': this.LEFT,
        ' ': this.SPACE ,
        'x': this.X_BTN ,
        'v': this.V_BTNn,
    }


    processKeyInput(key, pressedBoolean) {
        console.log(this.keyObject[key], pressedBoolean)
        if (!world.character.isDead() && world.gameController.isInGameStatus()) {
            this.keyObject[key] = pressedBoolean;
            this.callCharacterActions();
            world.character.moving = true;   
        }
        this.stopDoing();

        
    }

    callCharacterActions() {
        if (this.UP) world.character.moveUp();
        if (this.DOWN) world.character.moveDown();
        if (this.RIGHT) this.initRightMove();
        if (this.LEFT) this.initLeftMove();
        if (this.X_BTN && world.character.bubbleStorage > 0) world.character.initBubbleAttack();
        if (this.V_BTN && world.character.poisonStorage > 0) world.character.initPoisonAttack();
        if (this.SPACE) world.character.initFinAttack();
    }


    initRightMove() {
        world.character.otherDirection = false;
        world.character.moveRight(world.level.levelEnd, 24);
        world.camera_x = -world.character.x * 0.9;
    }

    initLeftMove() {
        world.character.otherDirection = true;
        world.character.moveLeft(-400, 24);
        world.camera_x = -world.character.x * 0.9;
    }



    stopDoing() {
        if (!this.X_BTN && !this.V_BTN) world.character.isBubbleAttacking = false;
        if (!this.SPACE) world.character.stopFinAttack()
        if (this.noBtnPressed()) {
            world.character.moving = false;
            world.character.swim_sound.pause();
            world.character.isDead() ? world.character.loadImage('../Sharkie/img/sharkie/6.dead/1.Poisoned/12.png') : world.character.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        }
    }

    noBtnPressed() {
        return !this.UP && !this.DOWN && !this.RIGHT && !this.LEFT && !this.X_BTN && !this.SPACE && !this.V_BTN
    }

    checkDevMode(key) {
        if (key === 'D') {
            world.devMode ? world.devMode = false : world.devMode = true
        }
    }

    

}