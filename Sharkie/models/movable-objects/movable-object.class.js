class MovableObject extends DrawObject {
    world;
    lastHit = 0;
    currentCameraPosition;
    speed = 1;
    OFFSET_X_RIGHT = 0;
    OFFSET_X_LEFT = 0;
    OFFSET_Y_TOP = 0;
    OFFSET_Y_BOTTOM = 0;
    health = 100;
    ownDamage = 0;
    attackDamage = 0;
    dieAnimationCounter = 0;
    attack;
    hasItems = 1;
    intervals = [];
    otherDirection = false;


    /**
     * Bewegt das Objekt nach rechts, solange die x-Koordinate des Objekts kleiner als der angegebene `borderEast` ist.
     * Das Objekt wird mit einer Geschwindigkeit von `speed` nach rechts bewegt.
     * 
     * @param {number} [borderEast=528] - Der rechte Rand, bis zu dem das Objekt sich bewegen kann.
     * @param {number} [speed=24] - Die Geschwindigkeit, mit der das Objekt bewegt wird.
     */
    moveRight(borderEast = 528, speed = 24) {
        if (this.x < borderEast) {
            this.x = this.x + speed;
        }
    }

    
    /**
     * Bewegt das Objekt nach links, solange die x-Koordinate des Objekts größer als der angegebene `borderWest` ist.
     * Das Objekt wird mit einer Geschwindigkeit von `speed` nach links bewegt.
     * 
     * @param {number} [borderWest=-72] - Der linke Rand, bis zu dem das Objekt sich bewegen kann.
     * @param {number} [speed=24] - Die Geschwindigkeit, mit der das Objekt bewegt wird.
     */
    moveLeft(borderWest = -72, speed = 24) {
        if (this.x > borderWest) {
            this.x = this.x - speed;
        }
    }


    /**
     * Bewegt das Objekt nach oben, solange die y-Koordinate des Objekts größer als der angegebene `borderNorth` ist.
     * Das Objekt wird mit einer Geschwindigkeit von `speed` nach oben bewegt.
     * 
     * @param {number} [borderNorth=-100] - Der obere Rand, bis zu dem das Objekt sich bewegen kann.
     * @param {number} [speed=24] - Die Geschwindigkeit, mit der das Objekt bewegt wird.
     */
    moveUp(borderNorth = -100, speed = 24) {
        if (this.y > borderNorth) {
            this.y = this.y - speed;
        }
    }


    /**
     * Bewegt das Objekt nach unten, solange die y-Koordinate des Objekts kleiner als der angegebene `borderSouth` ist.
     * Das Objekt wird mit einer Geschwindigkeit von `speed` nach unten bewegt.
     * 
     * @param {number} [borderSouth=280] - Der untere Rand, bis zu dem das Objekt sich bewegen kann.
     * @param {number} [speed=24] - Die Geschwindigkeit, mit der das Objekt bewegt wird.
     */
    moveDown(borderSouth = 280, speed = 24) {
        if (this.y < borderSouth) {
            this.y = this.y + speed;
        }
    }


    /**
     * Führt eine Bewegungsanimation durch, indem ein Bild aus dem übergebenen `imgArray` ausgewählt wird.
     * Der Index für das nächste Bild wird dabei in der `imageIndex`-Variablen verfolgt.
     * 
     * @param {Array} imgArray - Ein Array von Bildquellen, das die Animation darstellt.
     */
    movingAnimation(imgArray) {
        let i = this.imageIndex % imgArray.length;
        this.img = imgArray[i];
        this.imageIndex++;
    }


    /**
     * Überprüft, ob sich das Objekt auf dem Bildschirm befindet, basierend auf der x-Koordinate und der aktuellen Kameraposition.
     * 
     * @param {number} x - Die x-Koordinate des Objekts.
     * @returns {boolean} - `true`, wenn das Objekt auf dem Bildschirm ist, andernfalls `false`.
     */
    objectIsOnScreen(x) {
        return x + this.currentCameraPosition < canvas.width
    }


    /**
     * Fügt dem Objekt Schaden zu und aktualisiert den Zustand des Gesundheitbalkens.
     * 
     * @param {number} damage - Der Schaden, der dem Objekt zugefügt wird.
     */
    gotHurt(damage) {
        this.ownDamage += damage;
        this.lastHit = Date.now();
        if (this instanceof Character) {
            world.level.statusBars[0].updateBar(this.health - this.ownDamage);
        }
    }


    /**
     * Überprüft, ob das Objekt kürzlich Schaden erlitten hat (innerhalb der letzten 500 ms).
     * 
     * @returns {boolean} - `true`, wenn das Objekt kürzlich Schaden erlitten hat, andernfalls `false`.
     */
    stillHurts() {
        return Date.now() - this.lastHit < 500;
    }


    /**
     * Überprüft, ob das Objekt tot ist, indem die verbleibende Gesundheit mit dem eigenen Schaden verglichen wird.
     * 
     * @returns {boolean} - `true`, wenn das Objekt tot ist, andernfalls `false`.
     */
    isDead() {
        return this.health - this.ownDamage <= 0;
    }


    /**
     * Überprüft, ob sich das Objekt über dem Boden befindet und zwingt es, nach unten zu fallen, wenn es zu hoch ist.
     */
    checkIfAboveGround() {
        if (this.y < 300) {
            const downForce = setInterval(() => {
                this.moveDown(401, 2);
                if (this.y >= 401) {
                    clearInterval(downForce)
                }
            }, 1000 / 60);
        }
    }


    /**
     * Lässt ein Item vom Objekt fallen und reduziert die Anzahl der Items, die das Objekt besitzt.
     * 
     * @param {object} item - Das Item, das fallen gelassen wird.
     */
    dropItem(item) {
        this.hasItems--;
        world.level.collectables.push(item);
    }


    /**
     * Stoppt alle Intervalle, die mit diesem Objekt verbunden sind, und markiert es als bereit für die Garbage Collection.
     */
    stop() {
        this.intervals.forEach(interval => clearInterval(interval));
        this.readyForGarbageCollection = true;
    }

}