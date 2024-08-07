class  Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    keyFunctionObject = {
        'ArrowUp': () => world.character.moveUp(),
        'ArrowDown': () => world.character.moveDown(),
        'ArrowRight': () => world.character.moveRight(),
        'ArrowLeft': () => world.character.moveLeft(),
    }

    processKeyInput(e) {
        let action = this.keyFunctionObject[e.key]
        if (action) {
            action();
            world.character.moving = true;
        }
    }
}