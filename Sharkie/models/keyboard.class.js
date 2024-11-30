class Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    X_BTN = false;
    SPACE = false;
    V_BTN = false;

    keyFunctionObject = {
        'ArrowUp': (boolean) => this.UP = boolean,
        'ArrowDown': (boolean) => this.DOWN = boolean,
        'ArrowRight': (boolean) => this.RIGHT = boolean,
        'ArrowLeft': (boolean) => this.LEFT = boolean,
        ' ': (boolean) => this.SPACE = boolean,
        'x': (boolean) => this.X_BTN = boolean,
        'v': (boolean) => this.V_BTN = boolean
    }


    processKeyInput(e, boolean) {
        let action = this.keyFunctionObject[e.key]
        if (action && !world.character.isDead() && world.status === 'game') {
            action(boolean);
            this.callCharacterActions();
            world.character.moving = true;
            this.stopDoing();
        }
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

    checkDevMode(e) {
        if (e.key === 'D') {
            world.devMode ? world.devMode = false : world.devMode = true
        }
    }

    

}