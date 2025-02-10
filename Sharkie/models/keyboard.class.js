class Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    X_BTN = false;
    SPACE = false;
    V_BTN = false;


    processKeyInput(key, press) {
        this.actionSwitch(key, press);
        this.noAction() ? this.stopDoing() : this.callCharacterKeyDownActions();
    }


    actionSwitch(key, press) {
        switch (key) {
            case 'ArrowUp':
                this.UP = press;
                break;
            case 'ArrowDown':
                this.DOWN = press;
                break;
            case 'ArrowRight':
                this.RIGHT = press;
                break;
            case 'ArrowLeft':
                this.LEFT = press;
                break;
            case ' ':
                this.SPACE = press;
                break;
            case 'x':
                this.X_BTN = press;
                break;
            case 'v':
                this.V_BTN = press;
                break;
            default:
                this.stopDoing();
        }
    }


    callCharacterKeyDownActions() {
        if (this.UP) world.character.moveUp();
        if (this.DOWN) world.character.moveDown();
        if (this.RIGHT) this.initRightMove();
        if (this.LEFT) this.initLeftMove();
        if (this.X_BTN && world.character.bubbleStorage > 0) world.character.initBubbleAttack();
        if (this.V_BTN && world.character.poisonStorage > 0) world.character.initPoisonAttack();
        if (this.SPACE) world.character.initFinAttack();
        world.character.setLastAction();
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
        if (this.noAction()) {
            world.character.swim_sound.pause();
            world.character.isDead() ? world.character.loadImage('../Sharkie/img/sharkie/6.dead/1.Poisoned/12.png') : world.character.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        }
    }

    noAction() {
        return !this.UP && !this.DOWN && !this.RIGHT && !this.LEFT && !this.X_BTN && !this.V_BTN && !this.SPACE
    }

    checkDevMode(key) {
        if (key === 'D') {
            world.devMode ? world.devMode = false : world.devMode = true
        }
    }



}