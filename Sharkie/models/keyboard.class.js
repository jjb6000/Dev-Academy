class Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;

    keyFunctionObject = {
        'ArrowUp': () => world.character.moveUp(),
        'ArrowDown': () => world.character.moveDown(),
        'ArrowRight': () => this.initRightMove(),
        'ArrowLeft': () => this.initLeftMove(),
        ' ': () => this.initFinAttack(),
        'x': () => this.initBubbleAttack(),
        'D': () => world.devMode ? world.devMode = false : world.devMode = true, //TODO delete 
    }

    processKeyInput(e) {        
        let action = this.keyFunctionObject[e.key]
        if (action) {
            action();
        }
    }

    initRightMove() {
        world.character.otherDirection = false;
        world.character.moveRight(level1.levelEnd, 24);
        world.camera_x = -world.character.x * 0.9;
        world.character.moving = true;
    }

    initLeftMove() {
        world.character.otherDirection = true;
        world.character.moveLeft(-400, 24);
        world.camera_x = -world.character.x * 0.9;
        world.character.moving = true;
    }

    initFinAttack() {
        world.character.finAttack = true;
    }

    initBubbleAttack() {
        if (Date.now() - world.character.timeStampLastBubbleAttack > 600 && world.character.bubbleStorage > 0) {
            world.character.bubbleAnimation();   
        }
        world.character.timeStampLastBubbleAttack = Date.now()
    }


    stopDoing(e) {       
        world.character.finAttack = false;
        world.character.moving = false;
        world.character.isBubbleAttacking = false;
        world.character.swim_sound.pause();
        world.character.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
    }

}