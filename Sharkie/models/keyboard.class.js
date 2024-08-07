class  Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    keyFunctionObject = {
        'ArrowUp': () => world.character.moveUp(),
        'ArrowDown': () => world.character.moveDown(),
        'ArrowRight': () => this.initRightMove(),
        'ArrowLeft': () => this.initLeftMove(),
    }

    processKeyInput(e) {
        let action = this.keyFunctionObject[e.key]
        if (action) {
            action();
            world.character.moving = true;
        }
    }

    initRightMove() {
        world.character.otherDirection = false;
        world.character.moveRight();
        world.camera_x = -world.character.x * 0.1;
    }

    initLeftMove() {
        world.character.otherDirection = true;
        world.character.moveLeft();
    }
}