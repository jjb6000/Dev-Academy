class Jellyfish extends MovableObject {
    intervall_1;
    intervall_2;

    constructor() {
        super();
        this.height = 100;
        this.width = 100;
    }


    /**
    * Startet die Animation und Bewegung des Objekts. 
    * Wenn das Objekt nicht tot ist, wird es nach oben bewegt. 
    * Wenn das Objekt tot ist, wird die Methode `deadBodyMovement` aufgerufen, um den toten Körper zu bewegen.
    * Das Intervall wird in `this.intervals` gespeichert, um es später zu stoppen.
    */
    animate() {
        const interval_1 = setInterval(() => {
            if (this.objectIsOnScreen(this.x) && !this.isDead()) {
                this.moveUp(-300, this.speed);
            }
            if (this.y < -80) this.stop();
            if (this.isDead()) {
                this.deadBodyMovement()
            }
        }, 1000 / 60);
        this.intervals.push(interval_1)
    }


    /**
    * Startet ein Intervall, das eine Animationsfunktion regelmäßig ausführt.
    * Wenn das Objekt nicht tot ist, wird die Methode `movingAnimation` mit den Animationsbildern ausgeführt.
    * Wenn das Objekt tot ist, wird eine andere Animation (`JELLY_BUBBLE_DEAD_IMGs`) angezeigt, und es wird ein Giftobjekt fallen gelassen, wenn `hasItems > 0`.
    * Das Intervall wird zur Liste `this.intervals` hinzugefügt.
    *
    * @param {number} intervalTime - Die Zeit in Millisekunden, die zwischen den einzelnen Animationen vergehen soll.
    */
    animationInterval(intervalTime) {
        const interval_2 = setInterval(() => {
            if (!this.isDead()) {
                this.movingAnimation(this.ANIMATION_IMGs);
            } else {
                this.movingAnimation(this.JELLY_BUBBLE_DEAD_IMGs);
                if (this.hasItems > 0) {
                    this.dropItem(new Poison(this.x, this.y));
                }
            }
        }, intervalTime);
        this.intervals.push(interval_2)
    }

    
    /**
    * Bewegt den toten Körper des Objekts nach oben, bis er eine bestimmte Höhe erreicht.
    * Wenn das Objekt die Y-Koordinate -80 erreicht oder überschreitet, wird die Bewegung gestoppt.
    */
    deadBodyMovement() {
        this.moveUp(-100, 1);
        if (this.y < -80) {
            this.stop()
        }
    }

}