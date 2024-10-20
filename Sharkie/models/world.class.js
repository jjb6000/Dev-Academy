class World {
    character = new Character();
    keyboard = new Keyboard();
    tryAgainBtn = new TryAgainBtn();
    level;
    camera_x = 0;
    canvas;
    ctx;
    bg_sound = new Audio('../Sharkie/audio/shark-bg-sound.mp3');
    devMode = false; 

    constructor(canvas, level) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.font = '24px Luckiest Guy';
        this.ctx.fillStyle = 'darkblue';
        this.level = level;
        this.drawWorld();
        this.character.world = this;
        this.collisionDetection();
        this.newBubblesInterval();
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
        this.writeOnCanvas('Bubbles: ' + String(this.character.bubbleStorage), 20, 70);
        this.writeOnCanvas('Poison: ' + String(this.character.poisonStorage), 20, 100);
        this.writeOnCanvas('Coins: ' + String(this.character.coinStorage), 20, 130);
        if (this.character.gameOver) {
            this.addToMap(this.tryAgainBtn);
            this.addToMap(new GameOver())
        }
        if (this.devMode) this.drawMiddle();
    }


    writeOnCanvas(text, x, y) {
        this.ctx.fillText(text, x, y)
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
        // movableObject.world = this;

        if (movableObject.otherDirection) {
            this.flip(movableObject);
        }

        movableObject.draw(this.ctx);

        if (movableObject.otherDirection) {
            this.reFlip(movableObject);
        }

        this.devModeForAllObjects(movableObject); //TODO delete
    }


    collisionDetection() {
        setInterval(() => {
            this.isCharacterColidingWithEnemy();

            this.isCharacterColidingWithCollectable();

            this.isCharacterCollectingHisFiredBubble();

            this.areFiredBubblesColidingWithEnemies();
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
                this.removeItem(item, 'collectable');
                this.character.collects(item);
                this.devModeCollisionLog(this.character, item);
            }
        });
    }

    isCharacterCollectingHisFiredBubble() {
        this.level.firedBubbles.forEach(item => {
            if (this.character.isColliding(item)) {
                this.removeItem(item, 'attackBubble');
                this.character.collects(item);
                this.devModeCollisionLog(this.character, item);
            }
        });
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

    removeItem(item, type) {
        if (type === 'collectable') {
            this.level.collectables.splice(this.level.collectables.indexOf(item), 1);
        }
        if (type === 'attackBubble') {
            this.level.firedBubbles.splice(this.level.firedBubbles.indexOf(item), 1);
        }
        
    }


    devModeCollisionLog(object1, object2) {
        if (this.devMode) {
            console.log(object1, 'hits', object2);
        }
    }


    devModeForAllObjects(mo) { 
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

    drawMiddle() {
        this.ctx.beginPath();
        this.ctx.lineWidth = '2';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineWidth = '2';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.moveTo(0, this.canvas.height / 2);
        this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
        this.ctx.stroke();
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


    newBubblesInterval() {
        setInterval(() => {
            for (let i = 0; i < 10; i++) {
                this.level.collectables.push(new Bubble(this.level.levelEnd));    
            }
        }, 10000);
    }


    // ANCHOR Eventlistener
    addEvents() {
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
    }


    handleClick(e) {
        if (this.isClickOnTryAgainBtn(e.offsetX, e.offsetY)) initGame();
    }


    isClickOnTryAgainBtn(x, y) {
        return x < 500 && x > 220 && y < 380 && y > 300 
    }
}