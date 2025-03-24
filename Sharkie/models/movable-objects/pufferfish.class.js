class Pufferfish extends MovableObject {
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim2.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim3.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim4.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim5.png')
    ];


    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.imageIndex = 0;
        this.height = 100;
        this.width = 100;
        this.speed = 0.6 + Math.random() * 0.6;
        this.x = 350 + Math.random() * levelEnd;
        this.y = -50 + Math.random() * 400;
        this.OFFSET_X_RIGHT = 24;
        this.OFFSET_X_LEFT = 8;
        this.OFFSET_Y_TOP = 16;
        this.OFFSET_Y_BOTTOM = 36;
        this.health = 50;
        this.attackDamage = 20;
        this.attack = 'poison';
        this.animate();
        this.animationInterval(150);
    }


    /**
     * Führt eine kontinuierliche Animation durch, bei der das Objekt nach links bewegt wird, solange es auf dem Bildschirm ist und nicht tot ist.
     * Wenn das Objekt tot ist, wird es nach rechts und unten bewegt, und wenn es den unteren Rand des Bildschirms erreicht, wird die Bewegung gestoppt.
     */
    animate() {
        const interval_1 = setInterval(() => {
            if (this.objectIsOnScreen(this.x) && !this.isDead()) {
                this.moveLeft(-100, this.speed)
            }
            if (this.isDead()) {
                this.moveRight(9999, 1);
                this.moveDown(9999, 1);
            }
            if (this.y > 500) {
                this.stop();
            }
        }, 1000 / 60);
        this.intervals.push(interval_1);
    }


    /**
     * Führt eine Animation mit einer bestimmten Zeitintervalldauer aus.
     * Wenn das Objekt nicht tot ist, wird die Bewegungsanimation fortgesetzt.
     * Wenn das Objekt tot ist, wird ein Bild geladen und, falls das Objekt Items hat, wird ein Item (Coin) fallen gelassen.
     * 
     * @param {number} intervalTime - Die Zeit zwischen den einzelnen Animationen in Millisekunden.
     */
    animationInterval(intervalTime) {
        const interval_2 = setInterval(() => {
            if (!this.isDead()) {
                this.movingAnimation(this.ANIMATION_IMGs)
            }

            if (this.isDead()) {
                this.loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png');
                if (this.hasItems > 0) this.dropItem(new Coin(this.x, this.y));
            }
        }, intervalTime);
        this.intervals.push(interval_2);
    }

}
