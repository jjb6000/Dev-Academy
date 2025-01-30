class World {
    character;
    keyboard;
    gameController;
    level;
    levelIndex = 1
    camera_x = 0;
    canvas;
    ctx;
    gameOverImg = new GameOver();
    defaultBg = new Background('../Sharkie/img/bg/Dark/1.png', 0);
    bg_sound = new Audio('../Sharkie/audio/shark-bg-sound.mp3');
    devMode = false;
    collisionCheckInterval;
    menuBgObjects = MENU();
    animationFrame = 0;
    newBubblesInterval;
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
        this.collisionDetection();
        this.newBubbles();
    }


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameControllerCheck();
        // this.bg_sound.play();
        this.animationFrame = requestAnimationFrame(() => {
            this.drawWorld()
        });

    }


    gameControllerCheck() {
        if (this.gameController.isInGameStatus()) this.game();
        if (this.gameController.isGameOver()) this.gameOver();
        if (this.gameController.isInStartMenu()) this.startMenu();
        if (this.gameController.initNextLvl()) this.endCurrentLevel();
        if (this.gameController.endGame()) this.end();
    }


    game() {
        this.ctx.translate(this.camera_x, 0);
        this.setMovableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.setStaticObjects();
    }


    startMenu() {
        setTempCoinScore(0);
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


    getGameOverScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.defaultBg);
        this.addToMap(this.gameOverImg);
        if (!this.gOBtnSwitch) {
            gameOverBtns.style.display = 'flex';
            this.gOBtnSwitch = true;
        }
    }


    writeOnCanvas(text, x, y) {
        this.ctx.fillText(text, x, y)
    }


    gameOver() {
        setTempCoinScore(0);
        clearInterval(this.collisionCheckInterval);
        this.stopAllMovingAnimations();
    }


    endCurrentLevel() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        clearInterval(this.collisionCheckInterval);
        this.stopAllMovingAnimations();
        setTempCoinScore(this.character.coinStorage);
        cancelAnimationFrame(this.animationFrame);
        this.getBetweenLevelsScreen();
        if (this.gameController.currentLevel < 3) {
            this.startNextLevel()
        } else {
            this.end;
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
        this.camera_x = 0;
        this.level = this.gameController.getNextLevel();
        setTimeout(() => {
            gameController.setGameStatus('game')
            world.ctx.font = '24px Luckiest Guy';
            world.ctx.fillStyle = 'darkblue';
        }, 2000);
    }


    end() {
        clearInterval(this.collisionCheckInterval);
        this.stopAllMovingAnimations();
        cancelAnimationFrame(this.animationFrame);
        this.addToMap(this.defaultBg);
        this.writeOnCanvas('You won!!', 240, 160);
        endScreen(this.character.coinStorage);
        setTempCoinScore(0);
    }


    stopAllMovingAnimations() {
        if (!this.level || !this.level.hasOwnProperty('enemies')) return;
        clearInterval(this.newBubblesInterval);
        this.level.enemies.forEach(mO => mO.stop());
        if (this.level.firedBubbles.length > 0) {
            this.level.firedBubbles.forEach(fO => fO.stop());
        }
        this.level.collectables.forEach(cO => {
            if (!cO instanceof Poison) {
                cO.stop();
            }
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
        this.devModeForAllObjects(movableObject);
    }


    statusTriggerCheck(mO) {
        if (mO instanceof Whale && mO.whaleGone && this.gameController.currentLevel < 3) {
            this.gameController.setGameStatus('initNextLvl');
        }
        if (mO instanceof Character && mO.gameOver) {
            this.gameController.setGameStatus('gameOver');
        }
        if (mO instanceof Whale && mO.whaleGone && this.gameController.currentLevel === 3) {
            this.gameController.setGameStatus('end');
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
        this.collisionCheckInterval = setInterval(() => {
            if (!this.gameController.isInGameStatus()) {
                return
            }
            this.isCharacterColidingWithEnemy();

            this.isCharacterColidingWithCollectable();

            this.isCharacterCollectingHisFiredBubble();

            this.areFiredBubblesColidingWithEnemies();
        }, 200);
    }


    isCharacterColidingWithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isDead() && !this.gameController.isGameOver()) {
                this.checkIfCharacterCollidsWhileAttack(enemy);
                this.devModeCollisionLog(enemy, this.character);
            }
        })
    }


    checkIfCharacterCollidsWhileAttack(enemy) {
        if (this.character.finAttack && !(enemy instanceof Jellyfish3) && !(enemy instanceof Jellyfish4)) {
            enemy.gotHurt(this.character.attackDamage);
        } else {
            this.character.gotHurt(enemy.attackDamage)
            if (this.devMode) console.log('Sharkie Gesundheit:', (this.character.health - this.character.ownDamage));
            this.character.attackedBy = enemy.attack;
        }
    }


    isCharacterColidingWithCollectable() {
        this.level.collectables.forEach(item => {
            if (this.character.isColliding(item)) {
                this.character.collects(item);
                this.removeItem(item);
                this.devModeCollisionLog(this.character, item);
            }
        });
    }


    isCharacterCollectingHisFiredBubble() {
        this.level.firedBubbles.forEach(item => {
            if (this.character.isColliding(item)) {
                this.removeItem(item);
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


    newBubbles() {
        this.newBubblesInterval = setInterval(() => {
            if (this.gameController.isGameOver()) {
                clearInterval(this.newBubblesInterval);
                return
            }
            if (this.gameController.isInStartMenu()) {
                return
            }
            for (let i = 0; i < 10; i++) {
                this.level.collectables.push(new Bubble(this.level.levelEnd));
            }
        }, 10000);
    }


    cheat() {
        this.level.enemies.forEach(item => {
            if (item instanceof Whale) {
                item.ownDamage = 2000;
                item.x = this.character.x + 200
            }
        })
    }

}