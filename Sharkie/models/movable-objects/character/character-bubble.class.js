class AttackBubble extends Character {
    height = 60;
    width = 60;
    speed = 0.9;
    x;
    y;
    collectable = false;


    constructor(x, y, otherDirectionBoolean) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');       
        this.y = y;
        otherDirectionBoolean ? this.x = x - 260 : this.x = x;     
        this.animate();
        this.OFFSET_X_RIGHT = 0;
        this.OFFSET_X_LEFT = 0;
        this.OFFSET_Y_TOP = 0;
        this.OFFSET_Y_BOTTOM = 0;
        this.otherDirection = otherDirectionBoolean;
        setTimeout(() => {
            this.collectable = true;            
        }, 500);
    }


    /**
     * Animiert die Bewegung des Objekts mit einer konstanten Geschwindigkeit und einer
     * vertikalen Aufwärtskraft. Reduziert die horizontale Geschwindigkeit allmählich und
     * bewegt das Objekt je nach Richtung nach links oder rechts. Die vertikale Bewegung wird
     * durch eine stetig zunehmende Aufwärtskraft unterstützt. Stoppt die Animation, wenn
     * das Objekt eine bestimmte Höhe überschreitet.
     */
    animate() {
        let upForce = 0;
        const upForceInterval = setInterval(() => {
        this.speed > 0? this.speed = this.speed - 0.001 : this.speed = 0;
           this.otherDirection ? this.moveLeft(-world.level.levelEnd, this.speed) : this.moveRight(world.level.levelEnd, this.speed);
            upForce = upForce + 0.002;
            this.moveUp(-100, upForce);
            if (this.y <= -180) {
                this.stop()
            }
        }, 1000 / 60);
        this.intervals.push(upForceInterval);
    }



}