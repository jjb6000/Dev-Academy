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


    /**
     * Startet das Zeichnen der Welt.
     */
    startDraw() {
        this.drawWorld();
    }


    /**
     * Zeichnet die Welt auf die Leinwand und führt das Animations-Frame aus.
     */
    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameControllerCheck();
        this.gameController.playBgSound();
        this.animationFrame = requestAnimationFrame(() => {
            if (this.gameController.isInGameStatus() || this.gameController.isInStartMenu()) {
                this.drawWorld();
                this.collisionDetection();
                this.newBubbles();
            }
        });
    }


    /**
     * Überprüft den Status des Spiels und ruft die entsprechende Methode auf.
     */
    gameControllerCheck() {
        if (this.gameController.isInGameStatus()) this.game();
        if (this.gameController.isGameOver()) this.gameOver();
        if (this.gameController.isInStartMenu()) this.startMenu();
        if (this.gameController.initNextLvl()) this.endCurrentLevel();
    }


    /**
     * Zeichnet die Spielfiguren und beweglichen Objekte.
     */
    game() {
        this.ctx.translate(this.camera_x, 0);
        this.setMovableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.setStaticObjects();
    }


    /**
     * Initialisiert das Startmenü.
     */
    startMenu() {
        this.gameController.setTempCoinScore(0);
        if (this.menuBgObjects) {
            this.menuBgObjects.forEach(objectArray => {this.addMultiObjectsToMap(objectArray)});
        }
    }


    /**
     * Beendet das Menü und stoppt die Animationen.
     */
    endMenu() {
        cancelAnimationFrame(this.menuAnimation);
        menu.forEach(menuArray => {
            menuArray.forEach(o => {if (o instanceof MovableObject) o.stop()});
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    /**
     * Beendet das Spiel und stoppt alle Animationen.
     */
    gameOver() {
        this.gameController.setTempCoinScore(0);
        this.stopWorld();
    }


    /**
     * Beendet das aktuelle Level und setzt das Spiel für das nächste Level zurück.
     */
    endCurrentLevel() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameController.setTempCoinScore(this.character.coinStorage);
        this.camera_x = 0;
        this.character.x = 0;
        this.stopWorld();
        if (this.gameController.currentLevel < 3) {
            this.getBetweenLevelsScreen();
            this.startNextLevel();
        } else {
            this.gameController.setEnd();
        }
    }


    /**
     * Zeigt einen Bildschirm zwischen den Leveln an.
     */
    getBetweenLevelsScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.defaultBg);
        this.ctx.font = '80px Luckiest Guy';
        this.ctx.fillStyle = 'yellow';
        this.writeOnCanvas('Level ' + (+this.gameController.currentLevel + +1), 240, 160);
    }


    /**
     * Startet das nächste Level nach einer kurzen Verzögerung.
     */
    startNextLevel() {
        this.level = this.gameController.getNextLevel();
        setTimeout(() => {
            gameController.setGameStatus();
            world.ctx.font = '24px Luckiest Guy';
            world.ctx.fillStyle = 'darkblue';
            world.startDraw();
        }, 2000);
    }


    /**
     * Stoppt alle beweglichen Objekte und deren Animationen.
     */
    stopAllMovingAnimations() {
        if (!this.level || !this.level.hasOwnProperty('enemies')) return;
        clearInterval(this.newBubblesInterval);
        this.level.enemies.forEach(mO => mO.stop());
        if (this.level.firedBubbles.length > 0) {
            this.level.firedBubbles.forEach(fO => fO.stop());
        }
        this.level.collectables.forEach(cO => {if (!(cO instanceof Poison)) cO.stop()});
    }


    /**
     * Fügt bewegliche Objekte zur Welt hinzu.
     */
    setMovableObjects() {
        this.addMultiObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addMultiObjectsToMap(this.level.enemies);
        this.addMultiObjectsToMap(this.level.collectables);
        this.checkForFiredBubbles(this.level.firedBubbles);
    }


    /**
    * Fügt statische Objekte zur Welt hinzu.
    */
    setStaticObjects() {
        this.addMultiObjectsToMap(this.level.statusBars);
        this.writeOnCanvas('Bubbles: ' + String(this.character.bubbleStorage), 20, 70);
        this.writeOnCanvas('Poison: ' + String(this.character.poisonStorage), 20, 100);
        this.writeOnCanvas('Coins: ' + String(this.character.coinStorage), 20, 130);
    }


    /**
     * Schreibt einen Text auf das Canvas.
     * @param {string} text - Der zu schreibende Text.
     * @param {number} x - Die x-Koordinate des Textes.
     * @param {number} y - Die y-Koordinate des Textes.
     */
    writeOnCanvas(text, x, y) {
        this.ctx.fillText(text, x, y);
    }


    /**
     * Überprüft, ob abgefeuerte Blasen existieren, und fügt sie zur Karte hinzu.
     * @param {Array} objectArray - Array mit Objekten der Blasen.
     */
    checkForFiredBubbles(objectArray) {
        if (objectArray.length > 0) this.addMultiObjectsToMap(objectArray);
    }


    /**
     * Fügt mehrere Objekte zur Karte hinzu.
     * @param {Array} objects - Die Objekte, die zur Karte hinzugefügt werden sollen.
     */
    addMultiObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    }


    /**
    * Fügt ein einzelnes bewegliches Objekt zur Karte hinzu.
    * @param {Object} movableObject - Das bewegliche Objekt, das hinzugefügt wird.
    */
    addToMap(movableObject) {
        this.gameController.statusTriggerCheck(movableObject)
        movableObject.currentCameraPosition = this.camera_x;
        this.gameController.checkForGarbage(movableObject);
        if (movableObject.otherDirection) {
            this.flip(movableObject);
        }
        movableObject.draw(this.ctx);
        if (movableObject.otherDirection) {
            this.reFlip(movableObject);
        }
        this.gameController.loadScreenCheck(movableObject);
        this.setWorldToMo(movableObject);
    }


    setWorldToMo(mO) {
        if(mO.world) return;
        mO.world = this
    }


    /**
     * Führt Kollisionserkennung durch.
     */
    collisionDetection() {
        if (Date.now() - this.collisionTimeStamp < 200) return;
        this.isCharacterColidingWithEnemy();
        this.isCharacterColidingWithCollectable();
        this.isCharacterCollectingHisFiredBubble();
        this.areFiredBubblesColidingWithEnemies();
        this.collisionTimeStamp = Date.now();
    }


    /**
     * Überprüft, ob der Charakter mit einem Feind kollidiert.
     */
    isCharacterColidingWithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isDead() && !this.gameController.isGameOver()) {
                this.checkIfCharacterCollidsWhileAttack(enemy);
            }
        });
    }


    /**
     * Prüft, ob der Charakter während eines Angriffs mit einem Feind kollidiert.
     * @param {Object} enemy - Der kollidierende Feind.
     */
    checkIfCharacterCollidsWhileAttack(enemy) {
        if (this.character.finAttack && !(enemy instanceof Jellyfish3) && !(enemy instanceof Jellyfish4)) {
            enemy.gotHurt(this.character.attackDamage);
        } else {
            this.character.gotHurt(enemy.attackDamage);
            this.character.attackedBy = enemy.attack;
        }
    }


    /**
     * Überprüft, ob der Charakter mit einem sammelbaren Objekt kollidiert.
     */
    isCharacterColidingWithCollectable() {
        this.level.collectables.forEach(item => {
            if (this.character.isColliding(item)) {
                this.character.collects(item);
                this.gameController.removeItem(item);
            }
        });
    }


    /**
     * Überprüft, ob der Charakter seine eigene abgefeuerte Blase einsammelt.
     */
    isCharacterCollectingHisFiredBubble() {
        this.level.firedBubbles.forEach(item => {
            if (this.character.isColliding(item)) {
                this.gameController.removeItem(item);
                this.character.collects(item);
            }
        });
    }


    /**
     * Überprüft, ob abgefeuerte Blasen mit Feinden kollidieren.
     */
    areFiredBubblesColidingWithEnemies() {
        if (this.level.firedBubbles.length > 0) {
            this.level.firedBubbles.forEach(bubble => {
                this.isFiredBubbleColidingWithEnemy(bubble);
            });
        }
    }


    /**
     * Prüft, ob eine abgefeuerte Blase mit einem Feind kollidiert.
     * @param {Object} bubble - Die kollidierende Blase.
     */
    isFiredBubbleColidingWithEnemy(bubble) {
        this.level.enemies.forEach(enemy => {
            if (bubble.isColliding(enemy)) {
                enemy.gotHurt(bubble.attackDamage);
                this.popBubble(bubble);
            }
        });
    }


    /**
     * Entfernt eine abgefeuerte Blase aus dem Spiel.
     * @param {Object} bubble - Die Blase, die entfernt wird.
     */
    popBubble(bubble) {
        this.level.firedBubbles.splice(this.level.firedBubbles.indexOf(bubble), 1);
    }


    /**
     * Überprüft, ob ein Objekt ein Hintergrundobjekt ist.
     * @param {Object} mo - Das zu prüfende Objekt.
     * @returns {boolean} True, wenn das Objekt ein Hintergrundobjekt ist.
     */
    isBackground(mo) {
        return mo instanceof Background;
    }


    /**
     * Spiegelt ein bewegliches Objekt horizontal.
     * @param {Object} movableObject - Das zu spiegelnde Objekt.
     */
    flip(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


    /**
     * Setzt die Spiegelung eines Objekts zurück.
     * @param {Object} movableObject - Das zurückzusetzende Objekt.
     */
    reFlip(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }


    /**
    * Erzeugt regelmäßig neue Blasen im Spiel.
     */
    newBubbles() {
        if (Date.now() - this.bubbleTimeStamp < 10000 || !this.gameController.isInGameStatus()) return
        for (let i = 0; i < 10; i++) {
            this.level.collectables.push(new Bubble(this.level.levelEnd));
        }
        this.bubbleTimeStamp = Date.now();
    }


    /**
    * Stoppt das Spiel und alle Animationen.
    */
    stopWorld() {
        this.stopAllMovingAnimations();
        cancelAnimationFrame(this.animationFrame);
    }

}