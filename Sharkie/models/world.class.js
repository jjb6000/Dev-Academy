class World {
    character;
    keyboard;
    gameController;
    level;
    levelIndex = 1
    camera_x = 0;
    canvas;
    ctx;
    defaultBg = new Background('../Sharkie/img/bg/Dark/1.png', 0);
    menuBgObjects = MENU();
    animationFrame = 0;
    bubbleTimeStamp;
    collisionTimeStamp;
    constructor(canvas, gameController, level, charcater, keyboard) {
        this.gameController = gameController;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.font = '24px Luckiest Guy';
        this.ctx.fillStyle = 'darkblue';
        this.level = level;
        this.character = charcater;
        this.keyboard = keyboard;
        this.character.world = this;
    }


    startDraw() {
        this.drawWorld();
    }


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);       
        this.gameControllerCheck();
        this.animationFrame = requestAnimationFrame(() => {
            if (this.gameController.isInGameStatus() || this.gameController.isInStartMenu()) {
                this.drawWorld();
                this.collisionDetection();
                this.newBubbles();
            }
        });
    }


    gameControllerCheck() {
        if (this.gameController.isInGameStatus()) this.game();
        if (this.gameController.isGameOver()) this.gameOver();
        if (this.gameController.isInStartMenu()) this.startMenu();
        if (this.gameController.initNextLvl()) this.endCurrentLevel();
    }


    game() {
        this.ctx.translate(this.camera_x, 0);
        this.setMovableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.setStaticObjects();
    }


    startMenu() {
        this.gameController.setTempCoinScore(0);
        if (this.menuBgObjects) {
            this.menuBgObjects.forEach(objectArray => {
                this.addMultiObjectsToMap(objectArray);
            });
        }
    }


    endMenu() {
        cancelAnimationFrame(this.menuAnimation)
        menu.forEach(menuArray => {
            menuArray.forEach(o => {
                if (o instanceof MovableObject) o.stop();
            })
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    writeOnCanvas(text, x, y) {
        this.ctx.fillText(text, x, y)
    }


    gameOver() {
        this.gameController.setTempCoinScore(0);
        this.stopWorld();
    }


    endCurrentLevel() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameController.setTempCoinScore(this.character.coinStorage);
        this.camera_x = 0;
        this.character.x = 0;
        this.stopWorld();
        if (this.gameController.currentLevel < 3) {
            this.getBetweenLevelsScreen();
            this.startNextLevel()
        } else {
            this.gameController.setEnd();
        }
    }



    getBetweenLevelsScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.defaultBg);
        this.ctx.font = '80px Luckiest Guy';
        this.ctx.fillStyle = 'yellow';
        this.writeOnCanvas('Level ' + (+this.gameController.currentLevel + +1), 240, 160);
    }


    startNextLevel() {
        this.level = this.gameController.getNextLevel();
        setTimeout(() => {
            gameController.setGameStatus();
            world.ctx.font = '24px Luckiest Guy';
            world.ctx.fillStyle = 'darkblue';
            world.startDraw();
        }, 2000);
    }



    stopAllMovingAnimations() {
        if (!this.level || !this.level.hasOwnProperty('enemies')) return;
        clearInterval(this.newBubblesInterval);
        this.level.enemies.forEach(mO => mO.stop());
        if (this.level.firedBubbles.length > 0) {
            this.level.firedBubbles.forEach(fO => fO.stop());
        }
        this.level.collectables.forEach(cO => {
            if (!cO instanceof Poison) cO.stop();
        });
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
    }


    writeOnCanvas(text, x, y) {
        this.ctx.fillText(text, x, y)
    }


    checkForFiredBubbles(objectArray) {
        if (objectArray.length > 0) this.addMultiObjectsToMap(objectArray)
    }


    addMultiObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o))
    }


    addToMap(movableObject) {
        this.statusTriggerCheck(movableObject)
        movableObject.currentCameraPosition = this.camera_x;
        this.checkForGarbage(movableObject);
        if (movableObject.otherDirection) {
            this.flip(movableObject);
        }
        movableObject.draw(this.ctx);
        if (movableObject.otherDirection) {
            this.reFlip(movableObject);
        }
    }


    statusTriggerCheck(mO) {
        if (mO instanceof Whale && mO.whaleGone && this.gameController.currentLevel < 3) {
            this.gameController.setInitNxtLvl();
        }
        if (mO instanceof Character && mO.gameOver) {
            this.gameController.setGameOver();
        }
        if (mO instanceof Whale && mO.whaleGone && this.gameController.currentLevel === 3) {
            this.gameController.setEnd();
        }
    }


    checkForGarbage(movableObject) {
        if (movableObject.readyForGarbageCollection) {
            this.removeItem(movableObject);
        }
        if (this.gameController.isGameOver() && movableObject instanceof MovableObject && !movableObject instanceof Background) {
            movableObject.stop();
            this.removeItem(movableObject);
        }
    }


    collisionDetection() {
        if (Date.now() - this.collisionTimeStamp < 200) return        
        this.isCharacterColidingWithEnemy();
        this.isCharacterColidingWithCollectable();
        this.isCharacterCollectingHisFiredBubble();
        this.areFiredBubblesColidingWithEnemies();
        this.collisionTimeStamp = Date.now();
    }


    isCharacterColidingWithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isDead() && !this.gameController.isGameOver()) {
                this.checkIfCharacterCollidsWhileAttack(enemy);
            }
        });
    }


    checkIfCharacterCollidsWhileAttack(enemy) {
        if (this.character.finAttack && !(enemy instanceof Jellyfish3) && !(enemy instanceof Jellyfish4)) {
            enemy.gotHurt(this.character.attackDamage);
        } else {
            this.character.gotHurt(enemy.attackDamage)
            this.character.attackedBy = enemy.attack;
        }
    }


    isCharacterColidingWithCollectable() {
        this.level.collectables.forEach(item => {
            if (this.character.isColliding(item)) {
                this.character.collects(item);
                this.removeItem(item);
            }
        });
    }


    isCharacterCollectingHisFiredBubble() {
        this.level.firedBubbles.forEach(item => {
            if (this.character.isColliding(item)) {
                this.removeItem(item);
                this.character.collects(item);
            }
        });
    }


    areFiredBubblesColidingWithEnemies() {
        if (this.level.firedBubbles.length > 0) {
            this.level.firedBubbles.forEach(bubble => {
                this.isFiredBubbleColidingWithEnemy(bubble)
            });
        }
    }


    isFiredBubbleColidingWithEnemy(bubble) {
        this.level.enemies.forEach(enemy => {
            if (bubble.isColliding(enemy)) {
                enemy.gotHurt(bubble.attackDamage);
                this.popBubble(bubble);
            }
        })
    }


    popBubble(bubble) {
        this.level.firedBubbles.splice(this.level.firedBubbles.indexOf(bubble), 1);
    }


    removeItem(item) {
        if (item instanceof Bubble || item instanceof Coin || item instanceof Poison) {
            this.level.collectables.splice(this.level.collectables.indexOf(item), 1);
        }
        if (item instanceof AttackBubble) {
            this.level.firedBubbles.splice(this.level.firedBubbles.indexOf(item), 1);
        }
        if (item instanceof Jellyfish || item instanceof Pufferfish || item instanceof Whale) {
            this.level.enemies.splice(this.level.enemies.indexOf(item), 1);
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


    newBubbles() {
        if (Date.now() - this.bubbleTimeStamp < 10000 || !this.gameController.isInGameStatus()) {
            return
        }
        for (let i = 0; i < 10; i++) {
            this.level.collectables.push(new Bubble(this.level.levelEnd));
        }
        this.bubbleTimeStamp = Date.now();
    }


    stopWorld() {
        this.stopAllMovingAnimations();
        cancelAnimationFrame(this.animationFrame);
    }


    cheat() {
        this.level.enemies.forEach(item => {
            if (item instanceof Whale) {
                item.ownDamage = 2000;
                item.x = this.character.x + 200
            }
        });
    }

}