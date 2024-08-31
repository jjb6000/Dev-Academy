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
        this.setMovableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.setStaticObjects();
        requestAnimationFrame(() => this.drawWorld());
        // this.bg_sound.play();
    }

    setMovableObjects() {
        this.addMultiObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addMultiObjectsToMap(this.level.enemies);
        this.addMultiObjectsToMap(this.level.collectables);
        this.checkForFiredBubbles(this.level.firedBubbles);
    }

    setStaticObjects() {
        this.addMultiObjectsToMap(this.level.statusBars);
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
        }, 200)
    }


    isCharacterColidingWithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isDead()) {
                this.checkIfCharacterCollidsWhileAttack(enemy);
                this.devModeCollisionLog(enemy, this.character);
            }
        })
    }

    checkIfCharacterCollidsWhileAttack(enemy) {
        if (this.character.finAttack) {
            enemy.gotHurt(this.character.attackDamage)
        } else {
            this.character.gotHurt(enemy.attackDamage)
            this.character.attackedBy = enemy.attack;
        }
    }

    isCharacterColidingWithCollectable() {
        this.level.collectables.forEach(item => {
            if (this.character.isColliding(item)) {
                this.character.collects(item);
                this.removeItem(item)
                this.devModeCollisionLog(this.character, item);
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
            if (bubble.isColliding(enemy)) {
                enemy.gotHurt(bubble.attackDamage);
                this.popBubble(bubble)
                this.devModeCollisionLog(bubble, enemy)
            }
        })
    }


    popBubble(bubble) {
        this.level.firedBubbles.splice(this.level.firedBubbles.indexOf(bubble), 1);
    }

    removeItem(item) {
        this.level.collectables.splice(this.level.collectables.indexOf(item), 1);
    }


    devModeCollisionLog(object1, object2) {
        if (this.devMode) {
            console.log(object1, 'hits', object2);
        }
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