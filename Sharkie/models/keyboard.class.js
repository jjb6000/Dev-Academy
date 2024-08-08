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
        world.character.moveRight(level1.levelEnd, 24);
        world.camera_x = -world.character.x * 0.8;
    }

    initLeftMove() {
        world.character.otherDirection = true;
        world.character.moveLeft(-400, 24);
        world.camera_x = -world.character.x * 0.8;
    }
}