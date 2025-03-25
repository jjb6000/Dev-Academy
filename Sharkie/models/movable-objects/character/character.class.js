class Character extends MovableObject {
    gameOver = false;
    height = 280;
    width = 280;
    x = 0;
    y = 80;
    up = false;
    down = false;
    right = false;
    left = false;
    finAttack = false;
    finAttackInterval;
    finAttackIntervals = [];
    isBubbleAttacking = false;
    moving = false;
    attackedBy;
    timeStampLastBubbleAttack = Date.now();
    lastFinAttack = Date.now();
    lastAction = Date.now()
    bubbleStorage = 0;
    coinStorage
    poisonStorage = 0;
    imageIndex = 0;
    idleMode
    IDLE_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/8.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/9.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/10.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/11.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/12.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/13.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/14.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/15.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/16.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/17.png'),
        this.createImageForCache('../Sharkie/img/sharkie/1.IDLE/18.png'),
    ];
    LONG_IDLE_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/2.Long_IDLE/I11.png'),
        this.createImageForCache('../Sharkie/img/sharkie/2.Long_IDLE/I12.png'),
        this.createImageForCache('../Sharkie/img/sharkie/2.Long_IDLE/I13.png'),
        this.createImageForCache('../Sharkie/img/sharkie/2.Long_IDLE/I14.png'),
    ];
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/6.png'),
    ];
    FIN_ATTACK_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/8.png')
    ];
    BUBBLE_ATTACK_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png')
    ];
    POISON_BUBBLE_ATTACK_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/8.png')
    ];
    ELECTRIC_OUCH_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/2.Electric shock/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/2.Electric shock/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/2.Electric shock/3.png')
    ];
    POISON_OUCH_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/5.png')
    ];
    DEAD_BY_POISON_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/8.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/9.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/10.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/11.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/1.Poisoned/12.png'),
    ];
    DEAD_BY_SHOCK_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/8.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/9.png'),
        this.createImageForCache('../Sharkie/img/sharkie/6.dead/2.Electro_shock/10.png'),
    ];




    constructor() {
        super().loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        this.animate();
        this.health = 200;
        this.attackDamage = 50;
        this.OFFSET_X_RIGHT = 66;
        this.OFFSET_X_LEFT = 66;
        this.OFFSET_Y_TOP = 138;
        this.OFFSET_Y_BOTTOM = 74;
        this.idleMode = this.IDLE_IMGs;
        this.moveInterval();
        coinScore ? this.coinStorage = coinScore : this.coinStorage = 0;
    }


    /**
     * Führt die Animationen des Charakters basierend auf seinem aktuellen Zustand aus.
     * Überprüft kontinuierlich, ob der Charakter in einer bestimmten Situation ist 
     * (z. B. in Bewegung, verletzt, tot) und zeigt die entsprechende Animation an.
     * - Wenn der Charakter sich nicht bewegt, wird die Idle-Animation angezeigt.
     * - Wenn der Charakter sich bewegt, wird die Bewegungsanimation angezeigt.
     * - Wenn der Charakter eine Flossen-Attacke ausführt, wird die Fin-Attack-Animation angezeigt.
     * - Wenn der Charakter verletzt ist, wird eine spezielle Verletzungs-Animation angezeigt.
     * - Wenn der Charakter tot ist, wird die Tod-Animation abgespielt und die Intervalle gestoppt.
     * - Wenn der Charakter länger als 8 Sekunden inaktiv ist, wird die Idle-Animation auf "long idle" gesetzt.
     */
    animate() {
        const sharkieDoingSomething = setInterval(() => {
            if (!this.moving && !this.finAttack && !this.isBubbleAttacking && !this.stillHurts() && !this.isDead())
                this.movingAnimation(this.idleMode);
            if (this.moving && !this.isBubbleAttacking && !this.stillHurts() && !this.isDead())
                this.movingAnimation(this.ANIMATION_IMGs);
            if (this.stillHurts() && !this.isDead()) {
                this.stopFinAttack();
                this.movingAnimation(this.returnHurtAnimationBasedOnAttack(this.attackedBy));
            }
            if (this.isDead())
                this.deadSharkie(sharkieDoingSomething);
            if (Date.now() - this.lastAction > 10000)
                this.idleMode = this.LONG_IDLE_IMGs;
        }, 250);
        this.intervals.push(sharkieDoingSomething);
    }


    /**
    * Ruft die Bewegung der entsprechenden Richtungsvariable im Interval auf.
    * Bei Richtung links und rechts wird die Kamera mit leichter Verzögerung (Faktor 0,9) mitgeführt. 
    */
    moveInterval() {
        const sharkiMovingInt = setInterval(() => {
            if (this.up) {
                this.moveUp();
            }
            if (this.down) {
                this.moveDown();
            }
            if (this.right) {
                this.moveRight(world.level.levelEnd);
                world.camera_x = -this.x * 0.9;
            }
            if (this.left) {
                this.moveLeft();
                world.camera_x = -this.x * 0.9;
            }
        }, 60);
        this.intervals.push(sharkiMovingInt);
    }


    /**
    * Setzt die Bewegungs-Variable auf den übergenbenen Wert.
    * @returns {boolean} - `true`, wenn sharkie in Bewegung ist, sonst `false`.
    */
    setMove(value) {
        this.moving = value;
    }


    /**
    * Setzt die Richtungs-Variable auf den übergenbenen Wert, sodass im moveInterval die passende Aktion ausgeführt wird.
    * @returns {boolean} - `true`, wenn Richtung unten, andernfalls `false`.
    */
    setUpMove(value) {
        this.up = value
    }


    /**
    * Setzt die Richtungs-Variable auf den übergenbenen Wert, sodass im moveInterval die passende Aktion ausgeführt wird.
    * @returns {boolean} - `true`, wenn Richtung unten, andernfalls `false`.
    */
    setDownMove(value) {
        this.down = value
    }


    /**
    * Setzt die Richtungs-Variable auf den übergenbenen Wert, sodass im moveInterval die passende Aktion ausgeführt wird.
    * Umkehr-Variable wird gesetzt.
    * @returns {boolean} - `true`, wenn Richtung rechts, andernfalls `false`.
    */
    setRightMove(value) {
        if (value) this.otherDirection = !value
        this.right = value;

    }


    /**
    * Setzt die Richtungs-Variable auf den übergenbenen Wert, sodass im moveInterval die passende Aktion ausgeführt wird.
    * Umkehr-Variable wird gesetzt.
    * @returns {boolean} - `true`, wenn Richtung links, andernfalls `false`.
    */
    setLeftMove(value) {
        if (value) this.otherDirection = value
        this.left = value;
    }

    /**
    * Setzt die Flossen-Attacke-Variable auf den übergenbenen Wert, und ruft die Attacken-Initialisierung auf.
    */
    setFinAttack(value) {
        this.finAttack = value;
        if (this.finAttack) {
            this.changeOffsetDuringFinAttack();
            this.initFinAttack();
        }
    }


    /**
     * Setzt den Zeitpunkt der letzten Aktion des Charakters und setzt den Idle-Modus
     * auf die Standard-Idle-Animation.
     */
    setLastAction() {
        this.lastAction = Date.now();
        this.idleMode = this.IDLE_IMGs;
    }


    /**
     * Gibt die entsprechende Animationsreihe zurück, je nachdem, ob der Charakter
     * von einem elektrischen oder einem Gift-Angriff verletzt wurde.
     * @param {string} attackedBy - Der Typ des Angriffs (z. B. 'electric' oder 'poison').
     * @returns {Array} - Die entsprechende Animationsreihe für den Angriffstyp.
     */
    returnHurtAnimationBasedOnAttack(attackedBy) {
        if (attackedBy === 'electric') {
            return this.ELECTRIC_OUCH_IMGs;
        } else {
            return this.POISON_OUCH_IMGs;
        }
    }


    /**
     * Führt die Blasen-Attacke des Charakters aus, je nachdem, ob es sich um eine
     * Giftblase oder eine normale Angriffsblase handelt.
     * @param {string} attackType - Der Typ der Blase ('poison' oder 'attack').
     */
    bubbleAttack(attackType) {
        const bubbleCoo = this.calcBubbleCoordinates();
        if (attackType === 'poison') {
            this.world.level.firedBubbles.push(new PoisonBubble(bubbleCoo.x, bubbleCoo.y, this.otherDirection));
            this.poisonStorage--;
        } else {
            this.world.level.firedBubbles.push(new AttackBubble(bubbleCoo.x, bubbleCoo.y, this.otherDirection));
            this.bubbleStorage--;
        }
        this.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
    }


    /**
     * Berechnet die Koordinaten für den Blasenangriff basierend auf der Position des Charakters.
     * @returns {Object} - Die x- und y-Koordinaten für die Blase.
     */
    calcBubbleCoordinates() {
        return {
            'x': this.world.character.x + this.width + 20 - this.OFFSET_X_LEFT,
            'y': this.world.character.y + this.OFFSET_Y_TOP
        }
    }


    /**
     * Initialisiert die Flossen-Attacke des Charakters, wenn er nicht verletzt ist
     * und die letzte Fin-Attacke mehr als 300 ms zurückliegt.
     */
    initFinAttack() {
        this.lastFinAttack = Date.now();
        let i = 0;
        this.finAttackInterval = setInterval(() => {
            this.width = 340;
            this.img = this.FIN_ATTACK_IMGs[i]
            i++
            if (i === 8) {
                this.stopFinAttack();
            }
        }, 100);
        this.finAttackIntervals.push(this.finAttackInterval);
    }


    /**
     * Stoppt die Flossen-Attacke des Charakters und setzt den Offset zurück.
     */
    stopFinAttack() {
        this.width = 280;
        this.setFinAttack(false);
        this.moving = false
        this.finAttackIntervals.forEach(int => clearInterval(int));
    }


    /**
     * Ändert den Offset des Charakters während einer Flossen-Attacke.
     */
    changeOffsetDuringFinAttack() {
        if (this.finAttack) {
            this.OFFSET_X_LEFT = 10;
            this.OFFSET_X_RIGHT = 10;
        } else {
            this.OFFSET_X_LEFT = 56;
            this.OFFSET_X_RIGHT = 56;
        }
    }


    /**
     * Initialisiert die Blasen-Attacke des Charakters, wenn die Zeit seit der letzten Blasen-Attacke
     * mehr als 600 ms beträgt und Blasen im Vorrat sind.
     */
    initBubbleAttack() {
        if (Date.now() - this.timeStampLastBubbleAttack > 600 && this.bubbleStorage > 0) {
            this.bubbleAnimation(this.BUBBLE_ATTACK_IMGs, 'bubble');
        }
        this.timeStampLastBubbleAttack = Date.now();
    }


    /**
     * Initialisiert die Giftblasen-Attacke des Charakters, wenn die Zeit seit der letzten Blasen-Attacke
     * mehr als 600 ms beträgt und Giftblasen im Vorrat sind.
     */
    initPoisonAttack() {
        if (Date.now() - this.timeStampLastBubbleAttack > 600 && this.poisonStorage > 0) {
            this.bubbleAnimation(this.POISON_BUBBLE_ATTACK_IMGs, 'poison');
        }
        this.timeStampLastBubbleAttack = Date.now();
    }


    /**
     * Führt die Blasen-Attacke aus und zeigt die Animation für die Blase an.
     * @param {Array} imgArray - Das Array von Bild-URLs für die Animation.
     * @param {string} attackType - Der Typ der Blase ('bubble' oder 'poison').
     */
    bubbleAnimation(imgArray, attackType) {
        this.isBubbleAttacking = true;
        let i = 0;
        const bubbleInterval = setInterval(() => {
            if (i < 9 && this.isBubbleAttacking) {
                this.img = imgArray[i];
                i++;
            }
            if (i === 8) {
                this.bubbleAttack(attackType);
            }
            if (i === 9) {
                this.stopBubbleInterval(bubbleInterval);
            }
        }, 100);
    }


    /**
     * Stoppt das Blasen-Intervall und setzt den Charakter zurück, wenn die Blasen-Attacke abgeschlossen ist.
     * @param {number} bubbleInterval - Die ID des Blasen-Intervalls, das gestoppt werden soll.
     */
    stopBubbleInterval(bubbleInterval) {
        this.isBubbleAttacking = false;
        this.moving = false;
        clearInterval(bubbleInterval);
        this.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        this.timeStampLastBubbleAttack = 0;
    }


    bubblesInStorage() {
        return this.bubbleStorage > 0;
    }

    /**
     * Überprüft, ob der Charakter mit einem Gegner kollidiert.
     * @param {Object} enemy - Das Gegnerobjekt, mit dem die Kollision überprüft werden soll.
     * @returns {boolean} - `true`, wenn eine Kollision vorliegt, andernfalls `false`.
     */
    isColliding(enemy) {
        const characterBox = this.getCollisionBox(this);
        const enemyBox = this.getCollisionBox(enemy);
        return (characterBox.x + characterBox.width) >= enemyBox.x && characterBox.x <= (enemyBox.x + enemyBox.width) &&
            (characterBox.y + characterBox.height) >= enemyBox.y &&
            (characterBox.y) <= (enemyBox.y + enemyBox.height);
    }

    /**
     * Gibt das Kollisionserkennungsrechteck für das angegebene Objekt zurück.
     * @param {Object} mo - Das Objekt, dessen Kollisionserkennungsrechteck berechnet werden soll.
     * @returns {Object} - Ein Objekt mit den Eigenschaften `x`, `y`, `width` und `height`.
     */
    getCollisionBox(mo) {
        return {
            'x': mo.x + mo.OFFSET_X_LEFT,
            'y': mo.y + mo.OFFSET_Y_TOP,
            'width': mo.width - mo.OFFSET_X_LEFT - mo.OFFSET_X_RIGHT,
            'height': mo.height - mo.OFFSET_Y_BOTTOM - mo.OFFSET_Y_TOP
        }
    }


    /**
     * Sammelt verschiedene Items (Bubble, AttackBubble, Coin, Poison) und aktualisiert die entsprechenden Speicherwerte.
     * @param {Object} item - Das gesammelte Item (kann ein Bubble, AttackBubble, Coin oder Poison sein).
     */
    collects(item) {
        if (item instanceof Bubble || item instanceof AttackBubble) {
            this.bubbleStorage += 1;
        }
        if (item instanceof Coin) {
            this.coinStorage += 1;
            item.stop();
        }
        if (item instanceof Poison) {
            this.poisonStorage += 1;
        }
    }


    /**
     * Behandelt den Tod des Haifischs, der ausgelöst wird, wenn der Haifisch angegriffen wird.
     * Je nach Angriffstyp (elektrisch oder Gift) wird die entsprechende Todesanimation gestartet.
     * @param {number} sharkieDoingSomething - Die Interval-ID der aktuellen Animation des Haifischs, die verwendet wird, um sie zu löschen, wenn der Haifisch stirbt.
     */
    deadSharkie(sharkieDoingSomething) {
        if (this.attackedBy === 'electric') {
            this.sharkieInTunaCanAnimation(this.DEAD_BY_SHOCK_IMGs);
        }
        if (this.attackedBy === 'poison') {
            this.sharkieInTunaCanAnimation(this.DEAD_BY_POISON_IMGs);
        }
        clearInterval(sharkieDoingSomething);
    }


    /**
     * Spielt die Todesanimation des Haifischs ab, die auf einem Array von Bildframes basiert.
     * Sobald die Animation das letzte Frame erreicht, wird der Spielstatus auf 'Game Over' gesetzt.
     * @param {Array} imgArray - Das Array von Bildframes, die die Todesanimation des Haifischs darstellen.
     */
    sharkieInTunaCanAnimation(imgArray) {
        const dieAnimationIntervall = setInterval(() => {
            if (this.dieAnimationCounter < imgArray.length) {
                this.img = imgArray[this.dieAnimationCounter];
            }
            if (this.dieAnimationCounter >= imgArray.length) {
                this.img = imgArray[imgArray.length - 1];
                this.gameOver = true;
                clearInterval(dieAnimationIntervall);
            }
            this.dieAnimationCounter++;
        }, 150);
    }

}