class World {
    character = new Character();
    keyboard = new Keyboard();
    level;
    camera_x = 0;
    canvas;
    ctx;
    bg_sound = new Audio('../Sharkie/audio/shark-bg-sound.mp3');
    devMode = false; //TODO delete

    constructor(canvas, level) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.level = level;
        this.drawWorld();
        this.character.world = this;
        this.collisionDetection();
    }


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addMultiObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addMultiObjectsToMap(this.level.enemies);
        this.addMultiObjectsToMap(this.level.collectables);
        this.checkForFiredBubbles(this.level.firedBubbles);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.drawWorld());
        // this.bg_sound.play();
    }

    checkForFiredBubbles(objectArray) {
        if (objectArray.length > 0) {
            this.addMultiObjectsToMap(objectArray)
        }
    }


    addMultiObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o))
    }


    addToMap(movableObject) {
        movableObject.currentCameraPosition = this.camera_x;

        if (movableObject.otherDirection) {
            this.flip(movableObject);
        }

        movableObject.draw(this.ctx);

        if (movableObject.otherDirection) {
            this.reFlip(movableObject);
        }

        this.devModeForAllObjects(movableObject); //TODO delete
    }

    lookForFiredBubbles() {

    }


    collisionDetection() {
        setInterval(() => {
            this.isCharacterColidingWithEnemy();

            this.isCharacterColidingWithCollectable();

            this.areFiredBubblesColidingWithEnemies()
        }, 800)
    }


    isCharacterColidingWithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && this.devMode) {
                console.log('Character collision with', enemy);
            }
        })
    }

    isCharacterColidingWithCollectable() {
        this.level.collectables.forEach(item => {
            if (this.character.isColliding(item) && this.devMode) {
                console.log('Character collision with', item);
            }
        })
    }

    areFiredBubblesColidingWithEnemies() {
        if (this.level.firedBubbles.length > 0) {
            this.level.firedBubbles.forEach(bubble => {
                this.isFiredBubbleColidingWithEnemy(bubble)
            })
        }
    }

    isFiredBubbleColidingWithEnemy(bubble) {
        this.level.enemies.forEach(enemy => {
            if (bubble.isColliding(enemy) && this.devMode) {
                console.log(bubble, 'collision with', enemy);
            }
        })
    }


    devModeForAllObjects(mo) { //TODO delete
        if (this.devMode && !this.isBackground(mo)) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '2';
            this.ctx.strokeStyle = 'green';
            this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
            this.ctx.stroke();

            // collisionBox
            let collisionBox = this.character.getCollisionBox(mo);
            this.ctx.beginPath();
            this.ctx.lineWidth = '2';
            this.ctx.strokeStyle = 'red';
            this.ctx.rect(collisionBox.x, collisionBox.y, collisionBox.width, collisionBox.height);
            this.ctx.stroke();
        }
    }


    isBackground(mo) {
        return mo instanceof Background;
    }




    flip(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


    reFlip(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}