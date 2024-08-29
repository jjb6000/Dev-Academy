class Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    X_BTN = false;
    SPACE = false;

    keyFunctionObject = {
        'ArrowUp': (boolean) => this.UP = boolean,
        'ArrowDown': (boolean) => this.DOWN = boolean,
        'ArrowRight': (boolean) => this.RIGHT = boolean,
        'ArrowLeft': (boolean) => this.LEFT = boolean,
        ' ': (boolean) => this.SPACE = boolean,
        'x': (boolean) => this.X_BTN = boolean,
        'D': (boolean) => world.devMode = boolean
    }



    processKeyInput(e, boolean) {        
        let action = this.keyFunctionObject[e.key]
        if (action) {
            action(boolean);
            this.callCharacterActions()
            this.stopDoing()
        }
    }

    callCharacterActions() {
        if(this.UP) world.character.moveUp();
        if(this.DOWN) world.character.moveDown();
        if(this.RIGHT) this.initRightMove();
        if(this.LEFT)  this.initLeftMove();
        if(this.X_BTN)  world.character.initBubbleAttack();  
        if(this.SPACE)  world.character.initFinAttack();    
    }


    initRightMove() {
        world.character.otherDirection = false;
        world.character.moveRight(world.level.levelEnd, 24);
        world.camera_x = -world.character.x * 0.9;
        world.character.moving = true;
    }

    initLeftMove() {
        world.character.otherDirection = true;
        world.character.moveLeft(-400, 24);
        world.camera_x = -world.character.x * 0.9;
        world.character.moving = true;
    }



    stopDoing() {
        if(!this.UP) world.character.moving = false;
        if(!this.DOWN) world.character.moving = false;
        if(!this.RIGHT) world.character.moving = false;
        if(!this.LEFT)  world.character.moving = false;
        if(!this.X_BTN)  world.character.isBubbleAttacking = false;  
        if(!this.SPACE) world.character.stopFinAttack()
        if (this.noBtnPressed()) {
            world.character.moving = false;
            world.character.swim_sound.pause();
            world.character.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        }
    }

    noBtnPressed() {
        return !this.UP && !this.DOWN && !this.RIGHT && !this.LEFT && !this.X_BTN && !this.SPACE
    }

}