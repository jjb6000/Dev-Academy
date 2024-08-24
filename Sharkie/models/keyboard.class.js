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
        world.character.bubbleAttack = true;
        if (world.character.bubblesInStorage()) {
            world.character.bubbleStorage--;
            let bubbleCoo = this.calcBubbleCoordinates()
            let bubble = new AttackBubble(bubbleCoo.x, bubbleCoo.y) 
            world.level.firedBubbles.push(bubble);
        }
    }

    calcBubbleCoordinates() {
        console.log(world.character.x);
        
        return {
            'x': world.character.x + world.character.width,
            'y': world.character.y + 300
        }
        
    }
}